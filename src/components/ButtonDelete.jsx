import { RiDeleteBinLine } from "react-icons/ri";
import '../styles/Components/ButtonDelete.css';
export const ButtonDelete = () => {
    return (
        <div className="delete-button">
            <button className='deleteMovil'> <RiDeleteBinLine fontSize={'20px'} /></button>
            <button className='delete'> Eliminar <RiDeleteBinLine  /> </button>
        </div>
    )
}