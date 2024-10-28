import React, { useState } from 'react';
import '../styles/Components/Search.css';
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export const Search = ({ onSearch, onClear }) => { // Agregar onClear como propiedad
    const [searchInput, setSearchInput] = useState('');

    const handleClear = () => {
        setSearchInput(''); // Limpiar el estado local
        onClear(); // Llamar a la función onClear para notificar al componente padre
    };

    return (
        <div className='container-search'>
            <input 
                className="search-input" 
                type="input" 
                placeholder="Buscar..." 
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchInput !== '') {
                        e.preventDefault();
                        onSearch(searchInput, 1, 50);
                    }
                }}
            />
            <div className="container-buttons">
                <button 
                    className="input-clearing" 
                    title='Limpiar buscador' 
                    onClick={handleClear} // Usar handleClear para limpiar
                >
                    <RxCross2 />
                </button>
                <button 
                    className="search-button" 
                    title='Buscar'
                    onClick={() => onSearch(searchInput, 1, 50)}
                >
                    <LuSearch />
                </button>
            </div>
        </div>
    );
};
