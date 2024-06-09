import React, { useState, useRef, useEffect, forwardRef } from 'react';
// import VentanaModal from './VentanaModal';
// import BotonAbrirVentana from './BotonAbrirVentana';
import "../styles/Prueba.css"
import RequestTurn from './RequestTurn.jsx';

// import React, { forwardRef } from 'react';
// import './VentanaModal.css';

export const BotonAbrirVentana = ({ toggleVentana }) => {
    return (
      <button onClick={toggleVentana}>
        Abrir Ventana
      </button>
    );
  };
  

export const VentanaModal = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="ventana-modal">
      <h2>Ventana Modal</h2>
      <p>Contenido de la ventana.</p>
    </div>
  );
});








const Prueba = () => {
  const [ventanaAbierta, setVentanaAbierta] = useState(false);
  const ventanaRef = useRef(null);

  const toggleVentana = () => {
    setVentanaAbierta(!ventanaAbierta);
  };

  const handleClickOutside = (event) => {
    if (ventanaRef.current && !ventanaRef.current.contains(event.target)) {
      setVentanaAbierta(false);
    }
  };

  useEffect(() => {
    if (ventanaAbierta) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ventanaAbierta]);

  return (
    <div>
      <h1>Componente Principal</h1>
      <BotonAbrirVentana toggleVentana={toggleVentana} />
      {ventanaAbierta && <RequestTurn ref={ventanaRef} />}
    </div>
  );
};

export default Prueba;
