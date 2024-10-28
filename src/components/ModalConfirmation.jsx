import React from 'react';
import '../styles/Components/ModalConfirmation.css';
const ModalConfirmation = ({ tittleConfirmation, textConfirmation, openModal, textButtonClose, textButtonConfirmation, cancelAction, confirmAction }) => {

    return (
        <div className="container-confirmation">
            <div className="modal-confirmation">
                <h3 className="title-confirmation">{tittleConfirmation}</h3>
                <p className="text-confirmation">{textConfirmation}</p>

                <div className="container-buttons-confirmation">
                    <button onClick={cancelAction} className="button-1">
                        {textButtonClose}
                    </button>
                    <button onClick={confirmAction} className="button-2">
                        {textButtonConfirmation}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmation;                     