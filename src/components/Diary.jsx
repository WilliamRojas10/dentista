import React, { useEffect, useState } from 'react';
import '../styles/Diary.css';
import { RxCross2 } from "react-icons/rx";

const PendingShift = ({ datetime, especialidad, profesional }) => {
//TODO: en datatime deberia devolver en el siguiente formato: Lunes 12 de enero de 2025 - funcion para convertir el paramentro datetime en el fortmato aclaerado
    
    return (
        <div className='pending-shift'>
            <p className='date-text'>
                <p> <span>Fecha:</span> {datetime.split('T')[0]} </p>
                <p> <span>Horario:</span> {datetime.split('T')[1].slice(0, 5)} hs</p>
                <p> <span>Especialidad:</span> {especialidad} </p>
                <p> <span>Profesional:</span> {profesional}</p>
            </p>
            <button className='cancel'>Cancelar</button>
        </div>
    );
};

function Diary({ onOpen, turnConfirmed }) /*AbrirVentana y actualizar la agenda*/{
    const [turns, setTurns] = useState([]);

    useEffect(() => {
        const fetchTurnos = async () => {
            try {
                const response = await fetch(`http://localhost:5292/api/Turnos/ListarTurnosPorIdPaciente/1`);
                const data = await response.json();
                
                // Ordenar los turnos por fecha y hora de forma descendente
                const sortedTurns = data.sort((a, b) => new Date(b.fechaTurno) - new Date(a.fechaTurno));
                setTurns(sortedTurns);
            } catch (error) {
                console.error('Error fetching turnos:', error);
            }
        };

        fetchTurnos();
    }, [turnConfirmed]);

    return (
        <div className='diary'>
            <div className="container-btn">
                <button onClick={onOpen} className="close"><RxCross2 /></button>
                <h3>Turnos Agendados</h3>
            </div>
            <p className='warning-text'>Cancelar con un día o más de anticipación</p>
            {turns.map(turno => (
                <PendingShift
                    key={turno.id} // Asumiendo que cada turno tiene un id único
                    
                    datetime={turno.fechaTurno}
                    especialidad={turno.tratamientoNombre}
                    profesional={`Dr. ${turno.profesionalNombre} ${turno.profesionalApellido}`}
                />
            ))}
        </div>
    );
}

export default Diary;
