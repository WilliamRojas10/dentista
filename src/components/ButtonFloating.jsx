import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../styles/Components/ButtonFloating.css';

export const ButtonFloating = ( {textButton, link} ) => {

    return (
        <Link to={link} style={{ textDecoration: 'none' }} className='floating-button-container'>
            <button className='floating-button'> {textButton} <FaPlus /></button>
            <button className='floating-button-movil'> <FaPlus /></button>
        </Link>
    )   
}

