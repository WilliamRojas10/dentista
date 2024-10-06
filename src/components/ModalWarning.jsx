import React from 'react';
import '../styles/Components/ModalWarning.css';
const ModalWarning = ({ tittleWarning, textWarning, openModal, textButton }) => {

    return (
        <div className="container-warning">
            <div className="modal-warning">
                <h3 className="title-warning">{tittleWarning}</h3>
                <p className="text-warning">{textWarning}</p>
               
                <button onClick={openModal} className="close">
                    {textButton}
                </button>
            </div>
        </div>
    )
}

export default ModalWarning;                     