import React from 'react';
import '../styles/Warning.css';
const Warning = ({textWarning, closeWarning}) => {

    return (
        <div className="warning">
           <p className="text-warning">{textWarning}</p>
           {console.log(textWarning)}
           <button onClick={closeWarning} className="close"></button>
        </div>
    )
}

export default Warning;