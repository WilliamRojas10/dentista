import React, { useState, useEffect } from 'react';
import '../styles/Components/Pagination.css';

//TODO: mejorar - corregir el detale que tiene al deslezar hacia arriba inmediatemente para ver los ultimos registros no se carga correctamente el compoenente Pagination creo que puede estar la solucion en css
function Pagination({ paginaActual, totalPaginas, onPageChange }) {
    const [isVisible, setIsVisible] = useState(true);
    //  let lastScrollY = window.scrollY;

    
    //  const handleScroll = () => {
    //      if (window.scrollY > lastScrollY) {
    //          // Desplazándose hacia abajo, mostrar
    //          setIsVisible(true);
    //      } else {
    //          // Desplazándose hacia arriba, ocultar
    //          setIsVisible(false);
    //      }
    //      lastScrollY = window.scrollY;
    //  };

    //  useEffect(() => {
    //      window.addEventListener('scroll', handleScroll);
    //      return () => window.removeEventListener('scroll', handleScroll);
    //  }, []);

    // Calcular las páginas a mostrar
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
                Anterior
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
                Siguiente
            </button>
        </div>
    );
}

export default Pagination;
