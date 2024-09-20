import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { PiToothLight } from "react-icons/pi";
import { FaRegCalendarAlt, FaRegAddressCard, FaRegUser, FaRegCalendarCheck } from 'react-icons/fa';
import img from '../Images/interiorOficina.jpg';
import '../styles/Navigation.css';
import Dropdown from './Dropdown';


function Navigation() {
  const [open, setOpen] = useState(false);/*TODO Agregar useRef o el otro estado para que al hacer clic en cualquier otro lugar que no sea el menu se cierre*/
  const [profesionales, setProfesionales] = useState([]);
  const [nombreApellidoProfesional, setNombreApellidoProfesional] = useState("");
  useEffect(() => {
    const fetchTurnos = async () => {
        try {
            const response = await fetch("http://localhost:5292/api/Profesionales");
            const data = await response.json();
            setProfesionales(data);
       
        } catch (error) {
            console.error('Error al obtener los turnos de backend:', error);
        }
    };
    fetchTurnos();
}, []);

  return (
    <div className='navigation'>
      <header>{/*TODO Mejorar la estructura y estilos en general*/}
          <Link to="/" className='title'>SD ODONTOLOGIA  <PiToothLight /></Link>
          <button className={open ? 'menu-icon-false' : 'menu-icon'} onClick={() => setOpen(!open)}><FiMenu /></button>
          <button className={open ? 'cross-icon' : 'cross-icon-false'} onClick={() => setOpen(!open)}><RxCross2 /></button>
          <ul className={open ? 'menuOpen' : 'menuClose'}>
                  <li><Link to="/login"><FaRegUser /> Inicio de Sesion</Link></li>
                  <li><Link to="/createAccount"><FaRegAddressCard /> Crear Cuenta</Link></li>
          
                  <li>
                      <Dropdown
                        title="Turnero"
                        items={
                          profesionales.map((profesional) => {
                              return { label: `${profesional.profesion} ${profesional.nombre} ${profesional.apellido}`, link: `/calendar/${profesional.id}/${profesional.nombre} ${profesional.apellido}` };
                          })  
                        } 
                      
                      />
                       
                  </li>
            <li><Link to="/">Sobre Nosotros</Link></li>
            <li><Link to="/diary">Agenda</Link></li>
          </ul>
      </header>
    </div>
  );
}

export default Navigation;
