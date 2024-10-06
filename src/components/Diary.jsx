import React, { useEffect, useState } from 'react';
import '../styles/Components/Diary.css';
import { RxCross2 } from "react-icons/rx";
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Para usar la localización en español


const PendingShift = ({ idTurno, datetime, duracion, especialidad, profesional, onCancel }) => {
    const fetchCancel = async () => {
        try {
            await fetch(`http://localhost:5292/api/Turnos/CancelarTurno/1/${idTurno}`, {
                method: 'PUT', 
            });
            onCancel(idTurno);
        } catch (error) {
            console.error(`Error al cancelar el turno ${idTurno}:`, error);
        }
    };

    function sumarADateTimeHoras(datetime, minutes) {
        // Convierte el datetime en un objeto dayjs para poder manipularlo
        const time = dayjs(datetime);
    
        // Sumar los minutos al tiempo dado
        const newTime = time.add(minutes, 'minute');
    
        // Devuelve solo la hora y los minutos en formato 'HH:mm'
        return newTime.format('HH:mm');
    }

    const  cambiarFormatoFecha = ( fechaString ) /* A => lunes 12 de febrero de 2023*/  => {
        const fecha = dayjs(fechaString);
        const fechaModificada = fecha.locale('es').format('dddd D [de] MMMM [de] YYYY');
        return fechaModificada;
    }

    return (
        <div className='pending-shift'>
            <p className='date-text'>
                <p> <span>Fecha:</span> {cambiarFormatoFecha(datetime.split('T')[0])} </p>
                <p> <span>Horario:</span> {datetime.split('T')[1].slice(0, 5)}hs a {sumarADateTimeHoras(datetime, duracion)}hs</p>
                <p> <span>Tratamiento:</span> {especialidad} </p>
                <p> <span>Profesional:</span> {profesional}</p>
            </p>
            <button className='cancel' onClick={fetchCancel}>Cancelar</button>
        </div>
    );
};




const Diary = ({ onOpen, turnConfirmed }) => {
    const [turns, setTurns] = useState([]);

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
   

    const cancelTurno = (idTurno) => {
        setTurns(turns.filter(turno => turno.turnoID !== idTurno));
    };

    useEffect(() => {
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
                    key={turno.turnoID} // Usa el id único del turno
                    idTurno={turno.turnoID}
                    datetime={turno.fechaTurno}
                    duracion={turno.tratamientoDuracion}
                    especialidad={turno.tratamientoNombre}
                    profesional={`Dr. ${turno.profesionalNombre} ${turno.profesionalApellido}`}
                    onCancel={cancelTurno} // Pasa la función cancelTurno como prop
                />
            ))}
        </div>
    );
}

export default Diary;
