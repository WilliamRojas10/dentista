import React, { useState, useEffect } from 'react';
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import '../styles/Components/Pagination.css';

function Pagination({ paginaActual, totalPaginas, onPageChange }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    // Detectar si el dispositivo es móvil o de escritorio
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const obtenerPaginasVisibles = () => {
        if (totalPaginas <= 3) {
            return Array.from({ length: totalPaginas }, (_, i) => i + 1);
        } else {
            if (paginaActual === 1) {
                return [1, 2, 3];
            } else if (paginaActual === totalPaginas) {
                return [totalPaginas - 2, totalPaginas - 1, totalPaginas];
            } else {
                return [paginaActual - 1, paginaActual, paginaActual + 1];
            }
        }
    };

    return (
        <div className={`container-pagination ${isVisible ? 'visible' : 'hidden'}`}>
            <button
                className="button-previous"
                onClick={() => onPageChange(paginaActual > 1 ? paginaActual - 1 : 1)}
                disabled={paginaActual === 1}
            >
                {isMobile ? <TiChevronLeft /> : 'Anterior'}
            </button>
            {obtenerPaginasVisibles().map((num) => (
                <button
                    key={num}
                    className={`button-page ${num === paginaActual ? 'active' : ''}`}
                    onClick={() => onPageChange(num)}
                >
                    {num}
                </button>
            ))}
            <button
                className="button-next"
                onClick={() => onPageChange(paginaActual < totalPaginas ? paginaActual + 1 : totalPaginas)}
                disabled={paginaActual === totalPaginas}
            >
                {isMobile ? <TiChevronRight /> : 'Siguiente'}
            </button>
        </div>
    );
}

export default Pagination;
