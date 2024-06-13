import React from 'react'
import Navigation from './Navigation'
import CarouseReact from './CarouseReact'
import Infographic from './Infographic'
import Footer from './Footer'

import '../styles/Home.css'
import img from '../Images/extraccionDental.png'
////////////////////////////////////////////////////////////////////////////////////
function Home() {
  return (
    <div className='home'>

      <Navigation />
      <div className="presentation">
      
    <CarouseReact />

        {/* <div className="wave" style={{ height: '150px', overflow: 'hidden' }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M83.23,110.05 C289.78,67.61 162.24,198.86 528.49,100.17 L500.00,150.00 L-57.84,153.47 Z" style={{ stroke: 'none', fill: 'rgb(256,256,256)' }} />
          </svg>
        </div> */}

      </div>



      <main className='main'>
        <div className="infographics">
          <Infographic
            nameImg='implantes'
            urlImg={img}
            title='Implantes dentales'
            text='El implante dental es una estructura de titanio que reemplaza la raíz del diente perdido, ofreciendo una base sólida para colocar una prótesis dental'
          />
          <Infographic
            nameImg='extraccion-dental'
            urlImg={img}
            title='Extraccion dental'
            text='La extracción dental es el procedimiento en el que se retira un diente dañado, enfermo o impactado para preservar la salud bucal y aliviar el dolor.'
          />
          <Infographic
            nameImg='persno-corona'
            urlImg={img}
            title='Perno y corona'
            text='El perno y corona es un tratamiento dental que utiliza un perno insertado en el diente para luego colocar una corona, restaurando su forma y función.'
          />
          <Infographic
            nameImg='ortodoncia'
            urlImg={img}
            title='Ortodoncia'
            text='La ortodoncia es la especialidad dental que corrige la posición de los dientes y la mandíbula para lograr una sonrisa saludable y estética.'
          />
          <Infographic
            nameImg='endodoncia'
            urlImg={img}
            title='Endodoncia'
            text='Es un tratamiento para salvar un diente infectado o dañado, que implica la eliminación de la pulpa dental y la limpieza y sellado del canal radicular.'
          />
          <Infographic
            nameImg='proteccion-dental'
            urlImg={img}
            title='Prótesis dentales'
            text='La prótesis dental es una estructura artificial que reemplaza los dientes faltantes, restaurando la estética y función de la dentadura.'
          />
          <Infographic
            nameImg='examenes-dentales'
            urlImg={img}
            title='Exámenes dentales'
            text='Se realiza un chequeo dental regular que incluye la revisión de los dientes y las encías, así como la detección temprana de cualquier problema dental.'
          />
          <Infographic
            nameImg='limpieza-dental'
            urlImg={img}
            title='Limpieza dental'
            text='Un tratamiento que implica la eliminación de placa y sarro de los dientes, lo que puede prevenir la caries y la enfermedad periodontal.'
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home