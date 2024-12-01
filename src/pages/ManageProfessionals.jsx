import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { TiSortAlphabetically } from "react-icons/ti";
import { IoCalendarNumberOutline } from "react-icons/io5";

import Navigation from '../Layouts/Navigation.jsx';
import ModalWarning from '../components/ModalWarning.jsx';
import { HeaderRow, RowInformation } from '../components/Grilla.jsx';
import { ButtonFloating } from '../components/ButtonFloating.jsx';
import { Search } from '../components/Search.jsx';
import Pagination from '../components/Pagination.jsx';
import { _listarProfesionalesPaginado, _buscarProfesional, _eliminarProfesional } from '../Services/Profesional.js';
import '../styles/Pages/ManageProfessionals.css';

function ManageProfessionals() {
    const [isAlphabeticalAscending, setIsAlphabeticalAscending] = useState(true);
    const [isDateAscending, setIsDateAscending] = useState(true);
    const [openModalWarning, setOpenModalWarning] = useState(false);
    const [tittleWarning, setTittleWarning] = useState('');
    const [messageWarning, setMessageWarning] = useState('');
    const [colorWarning, setColorWarning] = useState('');

    // const [idprofesional, setIdprofesional] = useState(0);
    const [profesionales, setProfesionales] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [tamanioPagina, setTamanioPagina] = useState(20);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const toggleAlphabeticalOrder = () => {
        setIsAlphabeticalAscending(!isAlphabeticalAscending);
        isAlphabeticalAscending ?
            listarProfesionalesPaginado(1, "Nombre", "asc") :
            listarProfesionalesPaginado(1, "Nombre", "desc");
    };

    const toggleDateOrder = () => {
        setIsDateAscending(!isDateAscending);
        isDateAscending ?
            listarProfesionalesPaginado(1, "FechaRegistro", "asc") :
            listarProfesionalesPaginado(1, "FechaRegistro", "desc");
    };

    const listarProfesionalesPaginado = async (pagina, columna, orden) => {
        try {
            const data = await _listarProfesionalesPaginado(pagina, tamanioPagina, columna, orden);
            setProfesionales(data.profesionales);
            setTotalPaginas(Math.ceil(data.totalRegistros / tamanioPagina));
        } catch (error) {
            const errorMessage = error.response?.data?.mensaje || error.message;
            setTittleWarning('Error');
            setMessageWarning(errorMessage);
            setColorWarning('var(--rojo)');
            setOpenModalWarning(true);
        }
    };

    const buscarProfesional = async (filtro, pagina, tamanioPagina) => {
        try {
            const data = await _buscarProfesional(filtro, pagina, tamanioPagina);
            setProfesionales(data.profesionales);
            setTotalPaginas(Math.ceil(data.totalRegistros / tamanioPagina));
        } catch (error) {
            console.error("Error al buscar profesional: " + error.response?.data?.mensaje || error.message)
            setProfesionales([]);
        }
    };

    const eliminarProfesional = async (idProfesional) => {
        try {
            const data = await _eliminarProfesional( idProfesional );
            setTittleWarning('Aviso')
            setMessageWarning(data.mensaje);
            setColorWarning('var(--verde)');
            setOpenModalWarning(true);
        } catch (error) {
            const errorMessage = error.response?.data?.mensaje || error.message;
            setTittleWarning('Error');
            setMessageWarning(errorMessage);
            setColorWarning('var(--rojo)');
            setOpenModalWarning(true);
        }
    };
    
    useEffect(() => {
        if (searchInput === '') {
            listarProfesionalesPaginado(pagina, "FechaRegistro", "desc");
        } else {
            buscarProfesional(searchInput, pagina, tamanioPagina);
        }
    }, [pagina, searchInput, openModalWarning]);

    return (
        <div className='manage-professionals'>
            <Navigation />
            {openModalWarning && (
                <ModalWarning
                    tittleWarning={tittleWarning}
                    textWarning={messageWarning}
                    openModal={() => {
                        setOpenModalWarning(false);
                    }}
                    textButton={"Aceptar"}
                    color= {colorWarning}
                />
            )}
            <div className="container-functions">
                <Search
                    onSearch={(input) => {
                        setSearchInput(input);
                        setPagina(1); // Restablecer a la primera página en cada búsqueda
                    }}
                    onClear={() => {
                        setSearchInput(''); 
                        setPagina(1); 
                        listarProfesionalesPaginado(1, "FechaRegistro", "desc"); 
                    }}
                />

                <div className="container-buttons-sort">
                    {isAlphabeticalAscending ? 
                     (
                        <button className="button-simple sort-alphabetically-up" onClick={toggleAlphabeticalOrder} title='Ordenar alfabéticamente ascendente'>
                            <TiSortAlphabetically style={{ fontSize: '25px' }} />
                            <FaArrowUp style={{ fontSize: '15px' }} />
                        </button>
                    ) : (
                        <button className="button-simple sort-alphabetically-down" onClick={toggleAlphabeticalOrder} title='Ordenar alfabéticamente descendente'>
                            <TiSortAlphabetically style={{ fontSize: '25px' }} />
                            <FaArrowDown style={{ fontSize: '15px' }} />
                        </button>
                    )}
                    
                    {isDateAscending ? (
                        <button className="button-simple sort-by-date-up" onClick={toggleDateOrder} title='Ordenar por fecha ascendente'>
                            <IoCalendarNumberOutline style={{ fontSize: '25px' }} />
                            <FaArrowUp style={{ fontSize: '15px' }} />
                        </button>
                    ) : (
                        <button className="button-simple sort-by-date-down" onClick={toggleDateOrder} title='Ordenar por fecha descendente'>
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
                    column3="Apellido"
                    column4="DNI"
                    column5="Teléfono"
                    column6="Email"
                    column7="Fecha de nacimiento"
                />

                {profesionales.length === 0 ?
                <p style={{textAlign: 'center', marginTop: '20px'}}>No se encontraron resultados</p>
                : 
                profesionales.map((profesional, index) => (
                    <RowInformation
                        key={profesional.idProfesional}
                        link={`/CRUProfessional/${profesional.idProfesional}`}
                        colum1={index + 1 + (pagina - 1) * tamanioPagina}
                        colum2={profesional.nombre}
                        colum3={profesional.apellido}
                        colum4={profesional.dniProfesional}
                        colum5={profesional.telefono}
                        colum6={profesional.email}
                        colum7={profesional.fechaNacimiento}
                        onClickDelete ={() =>  eliminarProfesional( profesional.idProfesional )}
                    />
                ))} 
            </div>

            <Pagination
                paginaActual={pagina}
                totalPaginas={totalPaginas}
                onPageChange={setPagina}
            />

            <ButtonFloating
                textButton={"Agregar Profesional"}
                link={"/CRUProfessional/0"}
            />
        </div>
    );
}

export default ManageProfessionals;
