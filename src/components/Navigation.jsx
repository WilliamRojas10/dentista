import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import { RiToothFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegUser, FaRegCalendarCheck } from "react-icons/fa";
import img from '../Images/interiorOficina.jpg'
import '../styles/Navigation.css'
function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className='navigation'>
        <header>
            <Link to="/" className='title'>SD Odontologia <RiToothFill /></Link>
            <button  className={open ? 'menu-icon-false':'menu-icon'} onClick={() => setOpen(!open)}><FiMenu /></button>
            <button  className={open ?'cross-icon': 'cross-icon-false'} onClick={() => setOpen(!open)}><RxCross2 /></button>
      
              
                <ul className={open ? 'menuOpen' : 'menuClose'}>
                    <li><a href="/login"><FaRegUser /> Inicio de Sesion</a></li>
                    {/* <li><a href="/recoverAccount">Recuperar Cuenta</a></li> */}
                    <li><a href="/createAccount"><FaRegAddressCard /> Crear Cuenta</a></li>
                    {/* <li><a href="/registerProduct">Registrar Productos</a></li> */}
                    {/* {/* <li><a href="/calendarWeekly">Calendario Semanal</a></li> */}
                    <li><a href="/calendarWeekly">km</a></li>
                    <li><a href="/calendario"><FaRegCalendarAlt /> Turnero</a></li>
                    {/* <li><a href="/registerTurn">Registrar Turno</a></li> */}
                    <li><a href="/registerTurn"><FaRegCalendarCheck /> Registrar Turno</a></li>
                </ul>
                
        
        </header>
     
    </div>
  )
}

export default Navigation;