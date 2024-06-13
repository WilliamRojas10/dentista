import React from 'react'
import '../styles/Infographic.css'
function Infographic({ nameImg, urlImg, title, text }) {
    return (
        <div className='infographic'>
            <div className='container-img'>
                <img className={nameImg} src={urlImg} alt={nameImg} />
            </div>
            <div className='container-text'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default Infographic