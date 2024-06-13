import React from 'react'
import '../styles/Footer.css'
import img from '../Images/direccion.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
export default function footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="map">
          <img src={img} alt="" /> {/*TODO Se tiene que cambiar la imagen por el mapa*/}
        </div>
        <div className="info address">

          <h3>Bº Villa el Libertador</h3>
          <h3><MdLocationOn />Vicente forestieri 5534</h3>
          <h3>Lunes a Viernes de 9hs a 18hs</h3>
          <h3>Sabados de 9hs a 12hs</h3>


        </div>
        <div className="info contact">
          <h3><FaPhoneAlt /> Telefono</h3>
          <h3><FaFacebookSquare /> Facebook</h3>
          <h3><FaInstagram /> Instagram</h3>
          <h3><FaTelegramPlane /> Telegram</h3>


        </div>
      </div>
      <div className='ad'>
        <a href="https://www.linkedin.com">Creado por Magno 👑</a>
      </div>
    </div>
  )
}
