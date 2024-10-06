import React, { useState } from 'react'
import '../styles/Pages/ManageProfessionals.css'
import Navigation from '../Layouts/Navigation.jsx';
import { FaArrowDown, FaArrowUp} from "react-icons/fa";
import { TiSortAlphabetically } from "react-icons/ti";
import { IoCalendarNumberOutline } from "react-icons/io5";

import { HeaderRow, RowInformation} from '../components/Grilla.jsx'
import { ButtonFloating  } from '../components/ButtonFloating.jsx';
import { Search } from '../components/Search.jsx';

function ManageProfessionals () {
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
        <div className='manage-professionals'>
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
                    column2="Nombres" 
                    column3="Apellidos" 
                    column4="Especialidad" 
                    column5="Matricula" 
                    column6="Email" 
                    column7="Telefono"
                />
                <RowInformation
                link={"/CRUProfessional"}
                    colum1="2"
                    colum2="William Guillermo"
                    colum3="Rojas Buendia"
                    colum4="Programador"
                    colum5="1231"
                    colum6="william.guillermo.rojas@gmail.com"
                    colum7="3517477399"
                />
                <RowInformation
                link={"/CRUProfessional"}
                    colum1="1"
                    colum2="tatiana silvana"
                    colum3="diaz"
                    colum4="odontologia"
                    colum5="Matricula"
                    colum6="tatianasilvana@gmail.com"
                    colum7="3517479885"
                />
                <RowInformation
                link={"/CRUProfessional"}
                    colum1="2"
                    colum2="Anahi"
                    colum3="Pedrasanni"
                    colum4="Ortodoncista"
                    colum5="Matricula 123"
                    colum6="tatianasilvananahi@gmail.com"
                    colum7="351747988"
                />
                <RowInformation
                link={"/CRUProfessional"}
                    colum1="3"
                    colum2="Naiara Celeste"
                    colum3="Chioccatto Fernandez"
                    colum4="Ortodoncista"
                    colum5="Matricula 123"
                    colum6="naiaratatianasilvananahi@gmail.com"
                    colum7="351747988"
                />  <RowInformation
                link={"/CRUProfessional"}
                colum1="3"
                colum2="Naiara Celeste"
                colum3="Chioccatto Fernandez"
                colum4="Ortodoncista"
                colum5="Matricula 123"
                colum6="naiaratatianasilvananahi@gmail.com"
                colum7="351747988"
            />  <RowInformation
            link={"/CRUProfessional"}
            colum1="3"
            colum2="Naiara Celeste"
            colum3="Chioccatto Fernandez"
            colum4="Ortodoncista"
            colum5="Matricula 123"
            colum6="naiaratatianasilvananahi@gmail.com"
            colum7="351747988"
        />  <RowInformation
        link={"/CRUProfessional"}
        colum1="3"
        colum2="Naiara Celeste"
        colum3="Chioccatto Fernandez"
        colum4="Ortodoncista"
        colum5="Matricula 123"
        colum6="naiaratatianasilvananahi@gmail.com"
        colum7="351747988"
    />  <RowInformation
    link={"/CRUProfessional"}
    colum1="3"
    colum2="Naiara Celeste"
    colum3="Chioccatto Fernandez"
    colum4="Ortodoncista"
    colum5="Matricula 123"
    colum6="naiaratatianasilvananahi@gmail.com"
    colum7="351747988"
/>  <RowInformation
link={"/CRUProfessional"}
                    colum1="3"
                    colum2="Naiara Celeste"
                    colum3="Chioccatto Fernandez"
                    colum4="Ortodoncista"
                    colum5="Matricula 123"
                    colum6="naiaratatianasilvananahi@gmail.com"
                    colum7="351747988"
                />  <RowInformation
                link={"/CRUProfessional"}
                colum1="3"
                colum2="Naiara Celeste"
                colum3="Chioccatto Fernandez"
                colum4="Ortodoncista"
                colum5="Matricula 123"
                colum6="naiaratatianasilvananahi@gmail.com"
                colum7="351747988"
            />  <RowInformation
            link={"/CRUProfessional"}
            colum1="3"
            colum2="Naiara Celeste"
            colum3="Chioccatto Fernandez"
            colum4="Ortodoncista"
            colum5="Matricula 123"
            colum6="naiaratatianasilvananahi@gmail.com"
            colum7="351747988"
        />  <RowInformation
        link={"/CRUProfessional"}
        colum1="3"
        colum2="Naiara Celeste"
        colum3="Chioccatto Fernandez"
        colum4="Ortodoncista"
        colum5="Matricula 123"
        colum6="naiaratatianasilvananahi@gmail.com"
        colum7="351747988"
    />  <RowInformation
    link={"/CRUProfessional"}
    colum1="3"
    colum2="Naiara Celeste"
    colum3="Chioccatto Fernandez"
    colum4="Ortodoncista"
    colum5="Matricula 123"
    colum6="naiaratatianasilvananahi@gmail.com"
    colum7="351747988"
/>  <RowInformation
link={"/CRUProfessional"}
                    colum1="3"
                    colum2="Naiara Celeste"
                    colum3="Chioccatto Fernandez"
                    colum4="Ortodoncista"
                    colum5="Matricula 123"
                    colum6="naiaratatianasilvananahi@gmail.com"
                    colum7="351747988"
                />  <RowInformation
                link={"/CRUProfessional"}
                colum1="3"
                colum2="Naiara Celeste"
                colum3="Chioccatto Fernandez"
                colum4="Ortodoncista"
                colum5="Matricula 123"
                colum6="naiaratatianasilvananahi@gmail.com"
                colum7="351747988"
            />  <RowInformation
            link={"/CRUProfessional"}
            colum1="3"
            colum2="Naiara Celeste"
            colum3="Chioccatto Fernandez"
            colum4="Ortodoncista"
            colum5="Matricula 123"
            colum6="naiaratatianasilvananahi@gmail.com"
            colum7="351747988"
        />  <RowInformation
        link={"/CRUProfessional"}
        colum1="3"
        colum2="Naiara Celeste"
        colum3="Chioccatto Fernandez"
        colum4="Ortodoncista"
        colum5="Matricula 123"
        colum6="naiaratatianasilvananahi@gmail.com"
        colum7="351747988"
    />  <RowInformation
    link={"/CRUProfessional"}
    colum1="3"
    colum2="Naiara Celeste"
    colum3="Chioccatto Fernandez"
    colum4="Ortodoncista"
    colum5="Matricula 123"
    colum6="naiaratatianasilvananahi@gmail.com"
    colum7="351747988"
/>  <RowInformation
    link={"/CRUProfessional"}

                    colum1="3"
                    colum2="Naiara Celeste"
                    colum3="Chioccatto Fernandez"
                    colum4="Ortodoncista"
                    colum5="Matricula 123"
                    colum6="naiaratatianasilvananahi@gmail.com"
                    colum7="351747988"
                />
            </div>
            <ButtonFloating 
                textButton={"Agregar Profesional"}
                link={"/CRUProfessional"}
            />
        </div>
    )
}

export default ManageProfessionals