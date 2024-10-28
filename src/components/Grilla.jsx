//Se puede hacer mas flexible
import React, { useEffect, useState } from 'react';
import '../styles/Components/Grilla.css';
import { ButtonDelete } from '../components/ButtonDelete.jsx';
import { Link } from 'react-router-dom';
import { truncate } from '../Utils/truncate.js';  // Todo en minúsculas
import ModalConfirmation from '../components/ModalConfirmation.jsx';

export const HeaderRow = ( {column1, column2, column3, column4, column5, column6, column7} ) => {
 

    return (
        <div className="row row-header">
            <span className='column1'>{truncate(column1, 17)}</span>
            <span className='column2'>{truncate(column2, 17)}</span>
            <span className='column3'>{truncate(column3, 17)}</span>
            <span className='column4'>{truncate(column4, 17)}</span>
            <span className='column5'>{truncate(column5, 17)}</span>
            <span className='column6'>{truncate(column6, 17)}</span>
            <span className='column7'>{truncate(column7, 17)}</span>
        </div>
    );
};


// RowInformation.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ModalConfirmation from '../components/ModalConfirmation.jsx';
// import ButtonDelete from '../components/ButtonDelete.jsx';

export const RowInformation = ({ link, colum1, colum2, colum3, colum4, colum5, colum6, colum7, onClickDelete }) => {
    const [openModalConfirmation, setOpenModalConfirmation] = useState(false);

    const handleDeleteClick = (e) => {
        e.preventDefault(); // Evita que el enlace se active
        setOpenModalConfirmation(true);
    };

    const confirmAction = () => {
        onClickDelete(); // Llama a la función de eliminación pasada como prop
        setOpenModalConfirmation(false); // Cierra el modal de confirmación
    };

    return (
        <div  className="row-information">
            {openModalConfirmation &&
                <ModalConfirmation
                    tittleConfirmation={"Advertencia"}
                    textConfirmation={`¿Está seguro de que desea eliminar al paciente Nº ${colum1}?`}
                    openModal={() => {
                        setOpenModalConfirmation(false);
                    }}
                    confirmAction={confirmAction}
                    cancelAction={() => {
                        setOpenModalConfirmation(false);
                    }}
                    textButtonClose={"Cancelar"}
                    textButtonConfirmation={"Eliminar"}
                />
            }

            <Link to={link} className="row" style={{ color: 'black', textDecoration: 'none' }}>
                <span className='column1'>{truncate(colum1, 17)}</span>
                <span className='column2'>{truncate(colum2, 17)}</span>
                <span className='column3'>{truncate(colum3, 17)}</span>
                <span className='column4'>{truncate(colum4, 17)}</span>
                <span className='column5'>{truncate(colum5, 17)}</span>
                <span className='column6'>{truncate(colum6, 17)}</span>
                <span className='column7'>{truncate(colum7, 17)}</span>
            <ButtonDelete 
                onCLickDelete={e => handleDeleteClick(e)}
            />
            </Link>
            {/* <button onClick={onClickDelete}>ELIMINARE  </button> */}
        </div>
    );
};
