import React from 'react';

const Warning = ({textWarning, closeWarning}) => {

    return (
        <div className="warning">
           <p className="text-warning">{textWarning}</p>
           <button onClick={closeWarning} className="close"></button>
        </div>
    )
}

export default Warning;