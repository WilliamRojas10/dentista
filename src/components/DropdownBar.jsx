import React, { useRef, useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { Input } from './Input';
import '../styles/Components/DropdownBar.css';

export const DropdownBar = ({ weekType = "Tipo" }) => {
  const [seeMore, setSeeMore] = useState(false);

  const diasLaborales = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sabado'];

  const [isEditableDays, setIsEditableDays] = useState({
    lunes: false,
    martes: false,
    miércoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
  });

  const [horarios, setHorarios] = useState(
    diasLaborales.reduce((acc, dia) => {
      acc[dia] = { inicio: '', fin: '' }; // Valores iniciales
      return acc;
    }, {})
  );

  const handleDayClick = (day) => {
    setIsEditableDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  const handleTimeChange = (dia, tipo, value) => {
    setHorarios((prevState) => ({
      ...prevState,
      [dia]: {
        ...prevState[dia],
        [tipo]: value, // Actualiza el valor de inicio o fin
      },
    }));
  };

  const verPorConsola = () => {
    console.log('Horarios seleccionados:', horarios);
  };

  return (
    <div className="dropdown-bar">
      
      <div className="bar" onClick={() => setSeeMore(!seeMore)}>
        <span>Semana</span>
        <span>{weekType}</span>
        <span className="icon-dropdown-arrow">
          <IoIosArrowDropdown />
        </span>
      </div>
      <div className={`container-days ${seeMore ? 'open' : 'close'}`}>
        {diasLaborales.map((dia, index) => (
          <div key={index} className={`day-row day-row-${dia}`}>
            <button
              className={isEditableDays[dia] ? 'button-day_active' : 'button-day'}
              onClick={() => handleDayClick(dia)}
              type="button"
            >
              {dia}
            </button>
            <Input
              nombreGrupo={`input-${dia} input`}
              label="Hora de inicio:"
              tipoInput="time"
              require={isEditableDays[dia]}
              disabled={!isEditableDays[dia]}
              onChange={(e) => handleTimeChange(dia, 'inicio', e.target.value)}
            />
            <Input
              nombreGrupo="horaFin input"
              label="Hora de Fin:"
              tipoInput="time"
              require={isEditableDays[dia]}
              disabled={!isEditableDays[dia]}
              onChange={(e) => handleTimeChange(dia, 'fin', e.target.value)}
            />
          </div>
        ))}
      </div>
      {/* <button className="button-simple" onClick={verPorConsola}>
        Guardar
      </button> */}
    </div>
  );
};
