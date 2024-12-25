import React from 'react'
import '../styles/Components/InputDateBar.css'
import {Input} from './Input'
export const InputDateBar = () => {
  return (
    <div className='input-date-bar'>
        <Input
            nombreGrupo="startDate"
            label="Fecha de inicio:"
            tipoInput="date"
            placeholder=""
            //value={formData.nombre}
            //onChange={handleChange}
            // disabled={!isEditable} 
          />
          <Input
            nombreGrupo="endDate"
            label="Fecha de finalización:"
            tipoInput="date"
            placeholder=""
            //value={formData.nombre}
            //onChange={handleChange}
            // disabled={!isEditable} 
          />
          <Input
            nombreGrupo="reason"
            label="Motivo de la ausencia:"
            tipoInput="text"
            placeholder="Ficha médica..."
            //value={formData.nombre}
            //onChange={handleChange}
            // disabled={!isEditable} 
          />
        

    </div>
  )
}
