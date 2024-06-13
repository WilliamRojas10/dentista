import React, { useState } from 'react';
import '../styles/RequestTurn.css';
import {ListaPlegable, Input} from './Input.jsx';

import { RxCross2 } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LiaUserNurseSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
const RequestTurn = ({ dateTime, onConfirmTurn, onClose }) => {
    const [duration, setDuration] = useState("");
    const handleConfirm = (duration) => {
        onConfirmTurn(duration);
    };

    const getSelectedValue = (event) => {
        const duration = event.target.value;
        setDuration(duration)
    };

    //TODO Conectar con la API


    return (
        <div className="request-turn">
            <button onClick={onClose} className="close"><RxCross2 /></button>

                <ListaPlegable
                placeholder={"Tratamientos"}
                opciones={[7,15,20, 30, 45,57, 60,]}
                handleSelectChange={ getSelectedValue}
                />
                <p><FaRegCalendarAlt /> {`Fecha: ${dateTime.toString()}`}</p>
                <p><IoMdTime /> Hora:</p>
                <p><LiaUserNurseSolid /> Especialista - Tratamiento</p>
                <p><IoPersonOutline /> Nombre Paciente - Dni:</p>
                <p><RiMoneyDollarCircleLine /> Precio</p>
                <button className="submit" onClick={() => handleConfirm(duration)}>Confirmar</button>
            
        </div>
    );
};

export default RequestTurn;
