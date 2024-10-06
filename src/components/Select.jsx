// ListaPlegable.jsx
import React from 'react';
import "../styles/Components/Input.css";
function Select({ nombreGrupo, label, opciones, placeholder, value, onChange, require, disabled }) {
  return (
    <div className="select-group">
      <label htmlFor={nombreGrupo}>{label}</label>
      <select
        id={nombreGrupo} // Agrega un atributo 'id' para el elemento 'select'
        name={nombreGrupo} // Nombre de la clase
        required={require} // Si es requerido al hacer submit le avisa que tiene que completar este campo
        value={value} // Valor del select
        onChange={onChange} // Función que se ejecuta cuando cambia el valor
        className={nombreGrupo} // Nombre de la clase
        disabled={disabled} // Si esta o no deshabilitado el select
      >
        <option value="">{placeholder}</option>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
