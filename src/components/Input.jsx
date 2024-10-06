import React from "react"
import "../styles/Components/Input.css"

 const Input = ({ nombreGrupo, label, tipoInput, onChange, placeholder, msjError, require, value, disabled})=> {

    return(
        <div className={`g-${nombreGrupo}`}>
            <label
              htmlFor={nombreGrupo}>
              {label}
            </label>
            
            <input type={tipoInput} 
              className={nombreGrupo} 
              onChange={onChange}
              name={nombreGrupo}
              placeholder={placeholder}
              required={require}
              value={value}
              disabled={disabled}
            />
            <p className={`msj-error-${nombreGrupo}`}>{msjError}</p>
        </div>
    )
}


 const ListaPlegable = ({ nombreGrupo, label, placeholder, opciones, handleSelectChange, disabled }) => {

//   /*TODO el select tiene buscar dinaminicamente cuando se escriba*/
//   /*TODO El map hay que definir para que los datos de la base de datos se muestren*
   return (
     <div className={`g-${nombreGrupo}`}>
       <label htmlFor={nombreGrupo}>{label}</label>
       <select 
         className={nombreGrupo} 
         name={nombreGrupo} 
         required 
         onChange={handleSelectChange}
         disabled={disabled}>
         <option defaultValue="" disabled selected>
           {placeholder}
         </option>
         {opciones.map((opcion, index) => (
           <option key={index} value={opcion}>
             {opcion}
           </option>
         ))}
       </select>
     </div>
   );
  }
 
 export {ListaPlegable, Input}