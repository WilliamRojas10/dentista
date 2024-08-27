import React from 'react';
import '../styles/Warning.css';
const Warning = ({ textWarning, closeWarning }) => {

    return (
        <div className="container-warning">
            <div className="warning">
                <p className="text-warning">{textWarning}</p>
                {/* {console.log(textWarning)} */}
                <button onClick={closeWarning} className="close">Cerrar</button>
            </div>
        </div>
    )
}

export default Warning;                     