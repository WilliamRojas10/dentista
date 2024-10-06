import React from 'react'
import '../styles/Components/ShiftBar.css'
function ShiftBar({service}) {
  return (
    <div className='shift-bar'>
        <button className='shift-btn'>Pedir Turno <span>{">"}</span></button>
        <p className='service-text'>{service}</p>
    </div>
  )
}

export default ShiftBar