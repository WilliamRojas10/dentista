import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styles/Components/RequestTurn.css';
import { RxCross2 } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LiaUserNurseSolid } from "react-icons/lia";
import { MdOutlineTimer } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Para usar la localización en español
import ModalWarning from './ModalWarning'; // Importar el componente de advertencia

const ModalRequestTurn = ({ day, time, datetime, onConfirmTurn, openModal, dniProfesional }) => {
    const requestTurnRef = useRef(null);

    const [nombreProfesional, setNombreProfesional] = useState("");
    //const [dniProfesional, setDniProfesional] = useState("");
    const [precioTratamiento, setPrecioTratamiento] = useState(null);
    const [idTratamiento, setIdTratamiento] = useState(null);
    const [duration, setDuration] = useState("");
    const [completionTime, setCompletionTime] = useState("");
    const [tratamientos, setTratamientos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Estado para el error

    // Obtener tratamientos
    useEffect(() => {
        axios.get(`http://localhost:5292/api/Tratamientos/ObtenerTratamientosPorProfesional/${dniProfesional}`)
            .then(response => {
                console.log('Tratamientos:', response.data); // Para depuración
                setTratamientos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching treatments:', error); // Para depuración
                setError(error);
                setLoading(false);
            });
    }, []);

    const actualizarDuracion = () => {
        enviarDatos();
    };

    const getSelectedValue = (event) => {
        const tratamientoIdLocal = event.target.value;
        const tratamientoSeleccionado = tratamientos.find(t => t.tratamientoId === parseInt(tratamientoIdLocal));
        if (tratamientoSeleccionado) {
            setDuration(tratamientoSeleccionado.tratamientoDuracion);
            setPrecioTratamiento(tratamientoSeleccionado.tratamientoPrecio);
            setIdTratamiento(tratamientoSeleccionado.tratamientoId);
            setNombreProfesional(tratamientoSeleccionado.profesionalNombre + " " + tratamientoSeleccionado.profesionalApellido);
            //setDniProfesional(tratamientoSeleccionado.profesionalDni);
            setCompletionTime(sumarMinutos(time, tratamientoSeleccionado.tratamientoDuracion));
            console.log('Tratamiento seleccionado:', tratamientoSeleccionado); // Para depuración
            console.log('Dia y hora: ', day, time); // Para depuración
            console.log("Datetime: ", datetime); // Para depuración
        }
    };

    const enviarDatos = async () => {
        const datos = {
            fechaTurno: `${datetime}T${time}:00`,
            turnoEstado: 1,
            idPaciente: 1, // Ajusta según sea necesario
            dniProfesional: dniProfesional, // Ajusta según sea necesario
            idTratamiento: idTratamiento
        };

        try {
            const response = await axios.post('http://localhost:5292/api/Turnos/AgendarTurno', datos);
            onConfirmTurn(duration);
        } catch (error) {
            console.error('Error al enviar datos:', error);
            if (error.response && error.response.status === 400) {
                // Si el error es 400, significa que hubo un conflicto
                setError('El profesional ya tiene un turno programado en este horario, elija otro horario o día.');
            } else {
                setError('Ocurrió un error al registrar el turno.');
            }
        }
    };

    const sumarMinutos = (hora, minutos) => {
        const [horas, mins] = hora.split(':').map(Number);
        const totalMins = horas * 60 + mins + minutos;
        const nuevasHoras = Math.floor(totalMins / 60) % 24; // Usar % 24 para manejar desbordamientos de 24 horas
        const nuevosMinutos = totalMins % 60;
        const horarioFinal = `${nuevasHoras.toString().padStart(2, '0')}:${nuevosMinutos.toString().padStart(2, '0')}`;
        return ` A ${horarioFinal} hs`; 
    };

    function formatearFecha(fechaString) {
        const fecha = dayjs(fechaString);
        const fechaFormateada = fecha.locale('es').format('dddd D [de] MMMM [de] YYYY');
        return fechaFormateada;
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (requestTurnRef.current && !requestTurnRef.current.contains(event.target)) {
                openModal(); // Llama a la función de cierre si se hace clic fuera del componente
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openModal]);

    
    return (
        <div className="request-turn" ref={requestTurnRef}>
            <button onClick={openModal} className="close"><RxCross2 /></button>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <ModalWarning textWarning={error} closeWarning={() => setError(null)} />
            ) : (
                <ListaPlegable
                    placeholder={"Tratamientos"}
                    opciones={tratamientos.map(tratamiento => ({
                        value: tratamiento.tratamientoId,
                        label: `${tratamiento.tratamientoNombre} - ${tratamiento.profesionalNombre} ${tratamiento.profesionalApellido}`
                    }))}
                    handleSelectChange={getSelectedValue}
                />
            )}
            <p><FaRegCalendarAlt /> <span>Fecha: </span> {formatearFecha(datetime)}</p>
            <p><IoMdTime /> <span>Horario: </span> {`${time} ${completionTime}`} </p>
            <p><MdOutlineTimer/> <span>Duración: </span> {duration} minutos </p>
            <p><LiaUserNurseSolid /> <span>Especialista: </span> {nombreProfesional}</p>
            <p><RiMoneyDollarCircleLine /> <span>Precio: </span> ${precioTratamiento}</p>
            <button className="submit" onClick={actualizarDuracion}>Confirmar</button>
        </div>
    );
};

const ListaPlegable = ({ placeholder, opciones, handleSelectChange }) => {
    return (
        <select onChange={handleSelectChange}>
            <option value="">{placeholder}</option>
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
        </select>
    );
};

export default ModalRequestTurn;
