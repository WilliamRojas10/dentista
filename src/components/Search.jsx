import React from 'react'
import '../styles/Components/Search.css'
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx"
import { FaMagnifyingGlass } from "react-icons/fa6";
export const Search = () => {
    return (
        <div className='container-search'>
            <input className="search-input" type="input" placeholder="Buscar..." />
            <div className="container-buttons">
                <button className="input-clearing" title='Limpiar buscador'> <RxCross2 /> </button>
                <button className="search-button" title='Buscar'> <LuSearch /> </button>
            </div>
        </div>
    )
}

{/* <button className='cross' onClick={limpiarBusqueda}><RxCross2 /></button>
          <Link onClick={limpiarSugerencias} to={`/search/${terminoBusqueda}`} className='magnifying-glass'><FaMagnifyingGlass /></Link> */}