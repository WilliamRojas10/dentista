import React, { useState } from 'react';
import '../styles/RegisterTurn.css';
import {ListaPlegable, Input} from './Input.jsx';
import { Link } from 'react-router-dom';

import { RxCross2 } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LiaUserNurseSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const RegisterTurn = ({ dateTime, onConfirmTurn, onClose }) => {
    const [duration, setDuration] = useState("");
    const handleConfirm = (duration) => {
        onConfirmTurn(duration);
    };

    const getSelectedValue = (event) => {
        const duration = event.target.value;
        setDuration(duration)
    };

    const mockData = [
        {id: 1, name: 'Tratamiento 1', duration: 15},
        {id: 2, name: 'Tratamiento 2', duration: 30},
        {id: 3, name: 'Tratamiento 3', duration: 45},
        {id: 4, name: 'Tratamiento 4', duration: 60}]

    //TODO Conectar con la API, Admnistrador, Paciente y Turno


    return (
        <div className="register-turn">
            <button style={{fontSize:"1.5rem"}} onClick={onClose} title='cerrar' className="close"><RxCross2 /></button>

                <ListaPlegable
                placeholder={"Tratamientos"}
                opciones={[15, 30]}
                handleSelectChange={ getSelectedValue}
                />
                <Input 
                  nombreGrupo={"paciente"}
                  label={"Dni o Nombre del Paciente"}
                  placeholder={"Buscar..."}
                />
                <button className="search" title='Buscar'><HiMiniMagnifyingGlass /></button>
                 <p><IoPersonOutline /> Resultado de busqueda</p>
                <p><FaRegCalendarAlt /> {/*`Fecha: ${dateTime.toString()}`*/}</p>
                <p><IoMdTime /> Hora:</p>
                <p><LiaUserNurseSolid /> Especialista - Tratamiento</p>
               
                <p><RiMoneyDollarCircleLine /> Precio</p>
                <div className='container-buttons'>
                <Link to = "/registerUser" className="register-user" title='Registrars' >Registrar Paciente</Link>
                     <button className="submit" title='Confirmar Turno' onClick={() => handleConfirm(duration)}>Confirmar</button>
                    
                </div>
               
            
        </div>
    );
};

export default RegisterTurn;
