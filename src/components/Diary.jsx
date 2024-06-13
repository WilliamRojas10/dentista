import React from 'react'
import '../styles/Diary.css'

import { RxCross2 } from "react-icons/rx";
const PendingShift = ({ datetime, especialidad, profesional }) => {
    return (
        <div className='pending-shift'>
            <p className='date-text'><span>Fecha:</span>  Lun 12 Julio - <span>Horario:</span> {datetime} - <span>Especialidad:</span> {especialidad} - <span>Profesional:</span> {profesional}</p>
            <button className='cancel'>Cancelar</button>
        </div>
    )
}

function Diary({ onOpen }) {
    return (
        <div className='diary'>
            <div className="container-btn">
                <button onClick={onOpen} className="close"><RxCross2 /></button>

            </div>
            <p className='warning-text'>Cancelar con un día o más de anticipación</p>
            <PendingShift
                datetime={"09:00 - 10:00"}
                especialidad={"Ortodoncia"}
                profesional={"Dr. Martinelli"}
            />
            <PendingShift
                datetime={"09:00 - 10:00"}
                especialidad={"Ortodoncia"}
                profesional={"Dr. Martinelli"}
            /> <PendingShift
                datetime={"09:00 - 10:00"}
                especialidad={"Ortodoncia"}
                profesional={"Dr. Fernandez"}
            />

            <PendingShift
                datetime={"09:00 - 10:00"}
                especialidad={"Ortodoncia"}
                profesional={"Dr. Martinelli"}
            />
            <PendingShift
                datetime={"09:00 - 10:00"}
                especialidad={"Ortodoncia"}
                profesional={"Dr. Martinelli"}
            /> <PendingShift
                datetime={"09:00 - 10:00"}
                especialidad={"Ortodoncia"}
                profesional={"Dr. Fernandez"}
            />
        </div>
    )
}

export default Diary