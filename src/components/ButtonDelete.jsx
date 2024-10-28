import { RiDeleteBinLine } from "react-icons/ri";
import '../styles/Components/ButtonDelete.css';
export const ButtonDelete = ({ onCLickDelete  }) => {
    return (
        <div className="delete-button">
            <button onClick={onCLickDelete} className='deleteMovil'> <RiDeleteBinLine fontSize={'20px'} /></button>
            <button onClick={onCLickDelete} className='delete'> Eliminar <RiDeleteBinLine  /> </button>
        </div>
    )
}