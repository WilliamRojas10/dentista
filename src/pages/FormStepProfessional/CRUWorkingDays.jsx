import React, { useState } from 'react';
import '../../styles/Pages/FormStepProfessional/CRUWorkingDays.css';
import { IoIosArrowBack } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

import { DropdownBar } from '../../components/DropdownBar.jsx';
import { InputDateBar } from '../../components/InputDateBar.jsx';

function CRUWorkingDays() {



    const [dropdownBars, setDropdownBars] = useState([{ id: 1, weekType: 'A' }]); // Lista inicial con un DropdownBar
    const [inputDateBars, setInputDateBars] = useState([{ id: 1}]); // Lista inicial con un DropdownBar


    const plusDropdown = () => {
        // Generar un nuevo id y weekType para el próximo DropdownBar
        const nextId = dropdownBars.length + 1;
        const weekTypes = ['A', 'B', 'C', 'D', 'E']; // Tipos de semana
        const nextWeekType = weekTypes[nextId - 1] || `Custom${nextId}`; // Si se exceden los tipos predefinidos, asignar uno genérico

        // Agregar un nuevo DropdownBar a la lista
        setDropdownBars([...dropdownBars, { id: nextId, weekType: nextWeekType }]);
    };

    const plusInputDateBar = () => {
        // Generar un nuevo id y weekType para el próximo DropdownBar
        const nextId = inputDateBars.length + 1;
      //  const weekTypes = ['A', 'B', 'C', 'D', 'E']; // Tipos de semana
        const nextWeekType = `Custom${nextId}`;
        setInputDateBars([...inputDateBars, { id: nextId }]);

    }

    return (
        <div className="step">
            <form action="" className="form" style={{ width: "100%" }}>
                <div className="container-working-day">
                    <div className='header'>
                        <span title="Atrás" className="icon-back"><IoIosArrowBack style={{ fontSize: "30px" }} /></span>
                        <h2 onClick={plusDropdown}>  Días laborales <FiPlusCircle style={{ fontSize: "24px" }} /></h2>
                    </div>
                    <div className="container-dropdown-bar">
                        {dropdownBars.map((dropdown) => (
                            <DropdownBar key={dropdown.id} weekType={dropdown.weekType} />
                        ))}
                    </div>
                </div>

                <div className="container-non-working-day">

                    <h2 onClick={plusInputDateBar}>  Días no laborales <FiPlusCircle style={{ fontSize: "24px" }} /></h2>

                    <div className="container-input-date-bar">
                        {inputDateBars.map((dropdown) => (
                            <InputDateBar key={dropdown.id} />
                        ))}
                    </div>
                </div>

                <div className="container-btn">
                    <button type="button" className="btn" >
                        <FaArrowLeft />  Anterior
                    </button>
                     <button type="button" className="btn" >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CRUWorkingDays;
