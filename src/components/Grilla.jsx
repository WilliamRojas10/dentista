//Se puede hacer mas flexible
import React from 'react';
import '../styles/Components/Grilla.css';
import { ButtonDelete } from '../components/ButtonDelete.jsx';
import { Link } from 'react-router-dom';
import { truncate } from '../Utils/truncate.js';  // Todo en minúsculas

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


export const RowInformation = ({ link, colum1, colum2, colum3, colum4, colum5, colum6, colum7 }) => {

    return (
        <Link to={ link } style={{ textDecoration: 'none' }} className="row-information">

            <div className="row">
                <span className='column1'>{truncate(colum1, 17)}</span>
                <span className='column2'>{truncate(colum2, 17)}</span>
                <span className='column3'>{truncate(colum3, 17)}</span>
                <span className='column4'>{truncate(colum4, 17)}</span>
                <span className='column5'>{truncate(colum5, 17)}</span>
                <span className='column6'>{truncate(colum6, 17)}</span>
                <span className='column7'>{truncate(colum7, 17)}</span>

                <ButtonDelete />
            </div>


        </Link>
    );
};