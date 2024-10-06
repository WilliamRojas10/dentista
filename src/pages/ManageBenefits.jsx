import React, { useState } from 'react'
// import '../styles/Pages/ManageBenefits.css'
import Navigation from '../Layouts/Navigation.jsx'
import { FaArrowDown, FaArrowUp} from "react-icons/fa";
import { TiSortAlphabetically } from "react-icons/ti";
import { IoCalendarNumberOutline } from "react-icons/io5";

import { HeaderRow, RowInformation} from '../components/Grilla.jsx'
import { ButtonFloating  } from '../components/ButtonFloating.jsx';
import { Search } from '../components/Search.jsx';
function ManageBenefits() {
  const [isAlphabeticalAscending, setIsAlphabeticalAscending] = useState(true);
  const [isDateAscending, setIsDateAscending] = useState(true);

  //TODO: Implementar la comunicacion con el back

  const toggleAlphabeticalOrder = () => {
    setIsAlphabeticalAscending(!isAlphabeticalAscending);
  };

  const toggleDateOrder = () => {
    setIsDateAscending(!isDateAscending);
  };

  return (
    <div className='manage-benefits'>
      <Navigation />
      <div className="container-functions">
        <Search />
        <div className="container-buttons-sort">
          {isAlphabeticalAscending ?
            (
              <button className="button-simple sort-alphabetically-down"
                onClick={toggleAlphabeticalOrder}
                title='Ordenar alfabéticamente descendente'>
                <TiSortAlphabetically style={{ fontSize: '25px' }} />
                <FaArrowDown style={{ fontSize: '15px' }} />
              </button>
            )
            :
            (
              <button className="button-simple sort-alphabetically-up"
                onClick={toggleAlphabeticalOrder}
                title='Ordenar alfabéticamente ascendente'>
                <TiSortAlphabetically style={{ fontSize: '25px' }} />
                <FaArrowUp style={{ fontSize: '15px' }} />
              </button>
            )}

          {isDateAscending ?
            (
              <button className="button-simple sort-by-date-up"
                onClick={toggleDateOrder}
                title='Ordenar por fecha ascendente'>
                <IoCalendarNumberOutline style={{ fontSize: '25px' }} />
                <FaArrowUp style={{ fontSize: '15px' }} />
              </button>
            )
            :
            (
              <button className="button-simple sort-by-date-down"
                onClick={toggleDateOrder}
                title='Ordenar por fecha descendente'>
                <IoCalendarNumberOutline style={{ fontSize: '25px' }} />
                <FaArrowDown style={{ fontSize: '15px' }} />
              </button>
            )}
        </div>
      </div>

      <div className="container-rows">
        <HeaderRow
          column1="Nº"
          column2="Nombre"
          column3="Precio"
          column4="Descripcion"
          column5="Servicio"
          column6="Profesionales"
          column7="Telefono"
        />
        <RowInformation
          colum1="1"
          colum2="Consulta Odontologica"
          colum3="$20000"
          colum4="Se realiza una revision del paciente donde se analiza y saca dudas generales sobre el tratamiento"
          colum5="Odontologia"
          colum6="william.guillermo.rojas@gmail.com"
          colum7="3517477399"
        />
        
      

        <ButtonFloating 
          textButton={"Agregar Profesional"}
          link={"/createAccount"}
        />
      </div>
    </div>
  )
}

export default ManageBenefits