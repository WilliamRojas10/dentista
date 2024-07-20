import React from 'react'
import Navigation from './Navigation'
import CarouseReact from './CarouseReact'
import Infographic from './Infographic'
import Footer from './Footer'
import ShiftBar from './ShiftBar'
import '../styles/Home.css'
import img from '../Images/extraccionDental.png'
import img2 from '../Images/terapia2.png'
////////////////////////////////////////////////////////////////////////////////////
function Home() {
  return (
    <div className='home'>

      <Navigation />
      <div className="presentation">

       <CarouseReact />

       

      </div>



      <main className='main'>
        <div className="container-main">
        <h3 className='subtitle'>Odontologia</h3>
          <div className="container-infographics">
            
            <Infographic
              name='implantes'
              urlImg={img}
              title='Implantes dentales'
              text='El implante dental es una estructura de titanio que reemplaza la raíz del diente perdido, ofreciendo una base sólida para colocar una prótesis dental'
            />
            <Infographic
              name='extraccion-dental'
              urlImg={img}
              title='Extraccion dental'
              text='La extracción dental es el procedimiento en el que se retira un diente dañado, enfermo o impactado para preservar la salud bucal y aliviar el dolor.'
            />
            <Infographic
              name='persno-corona'
              urlImg={img}
              title='Perno y corona'
              text='El perno y corona es un tratamiento dental que utiliza un perno insertado en el diente para luego colocar una corona, restaurando su forma y función.'
            />
            <Infographic
              name='ortodoncia'
              urlImg={img}
              title='Ortodoncia'
              text='La ortodoncia es la especialidad dental que corrige la posición de los dientes y la mandíbula para lograr una sonrisa saludable y estética.'
            />
            <Infographic
              name='endodoncia'
              urlImg={img}
              title='Endodoncia'
              text='Es un tratamiento para salvar un diente infectado o dañado, que implica la eliminación de la pulpa dental y la limpieza y sellado del canal radicular.'
            />
            <Infographic
              name='proteccion-dental'
              urlImg={img}
              title='Prótesis dentales'
              text='La prótesis dental es una estructura artificial que reemplaza los dientes faltantes, restaurando la estética y función de la dentadura.'
            />
            <Infographic
              name='examenes-dentales'
              urlImg={img}
              title='Exámenes dentales'
              text='Se realiza un chequeo dental regular que incluye la revisión de los dientes y las encías, así como la detección temprana de cualquier problema dental.'
            />
            <Infographic
              name='limpieza-dental'
              urlImg={img}
              title='Limpieza dental'
              text='Un tratamiento que implica la eliminación de placa y sarro de los dientes, lo que puede prevenir la caries y la enfermedad periodontal.'
            />
            <ShiftBar
              service='Odontologia'
            />
          </div>
        </div>
        <div className="container-main">
          <h3 className='subtitle'>Psicología</h3>
          <div className="container-infographics">

            <Infographic
              name='consulta'
              urlImg={img2}
              title='Consulta presencial'
              text='_ Tratamientos para la liberarse de la ansiedad, ataques de pánico, y trastornos de sueño.
            _ Reconocer la vulnerabilidad para poder superar miedos y temores que paralizan.
            _ Conocer experiencias condicionantes para enfrentar desafíos personales, como nuevos trabajos exámenes y cambios importantes en el estilo de vida.
            _ Superar conflictos familiares, peleas con la pareja y discusiones recurrentes con hijos.
            _ Liderazgo empresarial, con sus dinámicas para mejorar la gestión de emociones y comunicación en sistemas complejos.'
            />
            <Infographic
              name='terapia-pareja'
              urlImg={img2}
              title='Terapia de pareja'
              text='Algunos de los temas a trabajar:
            _ Libertades individuales y compromisos familiares.
            _ Conciencia del momento vital por el que atraviesan todos los miembros del sistema familiar, pudiendo entender el lugar y momento del otro y sus necesidades.
            _ Recuperar la confianza, sanando heridas del pasado, revisando: rencores, resentimientos, enojos y frustraciones.'
            />
            <Infographic
              name='consulta-virtual'
              urlImg={img2}
              title='Consulta virtual'
              text='Juntos podremos entender cómo se activan los sistemas biológicos sensatos, de la triada Cerebro-Psiquis-Organo, para poder transitar cada etapa de su desarrollo, respetando los procesos naturales de cada individuo y sus posibilidades de recuperar la coherencia perdida. Un proceso que puede durar de uno a varias charlas, donde cada consulta tiene su tiempo de maduración y elaboración personal.'
            />
            <Infographic
              name='terapia'
              urlImg={img2}
              title='Terapia'
              text='Si bien la actitud principal del terapeuta es la contención y una escucha sin prejuicios, también implica confrontar algunas incoherencias que se hacen evidentes para la mirada profesional y que necesitamos discutir, para tomar decisiones diferentes a las que estas acostumbrado.

              En el proceso nos focalizamos en una serie de síntomas que te generar malestar, para identificar la conexión que guardan con tus formas de interpretar lo que te sucede y la modalidad de experimentar el mundo de tus relaciones.
              
              En cada sesión revisaremos áreas de tu vida que necesitas encontrar respuestas, y encontraremos recursos internos que no te imaginabas que estaban disponib'
            />
            <ShiftBar
              service='Psicología'
            />
          </div>
        </div>

      </main>
      <div className="wave" style={{ height: '100px', overflow: 'hidden' }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M83.23,110.05 C289.78,67.61 162.24,198.86 528.49,100.17 L500.00,150.00 L-57.84,153.47 Z" style={{ stroke: 'none', fill: 'rgb(122, 114, 190)' }} />
          </svg>
        </div>
      <Footer />
    </div>
  )
}

export default Home