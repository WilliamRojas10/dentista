// ListaPlegable.jsx
import React from 'react';
import "../styles/Input.css";
function Select({ nombreGrupo, label, opciones, placeholder, value, onChange, require }) {
  return (
    <div className="select-group">
      <label htmlFor={nombreGrupo}>{label}</label>
      <select
        id={nombreGrupo}
        name={nombreGrupo}
        required={require}
        value={value}
        onChange={onChange}
        className={nombreGrupo}
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
