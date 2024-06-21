import React, { useState } from 'react';
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
              items={[
                { label: 'Odontologia', link: '/calendario' },
                { label: 'Ortodoncia', link: '/calendario' },
                { label: 'Psicologia', link: '/calendario' },
                { label: 'Fonoaudiologia', link: '/calendario' },
              ]}

            />
          </li>
          <li><Link to="/">Sobre Nosotros</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default Navigation;
