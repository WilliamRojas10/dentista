import React, { useState } from 'react';
import '../styles/Components/ModalWarning.css';

const ModalWarning = ({ tittleWarning, textWarning, openModal, textButton, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="container-warning">
            <div className="modal-warning">
                <h3
                    style={{ backgroundColor: color }}
                    className="title-warning"
                >
                    {tittleWarning}
                </h3>
                <p className="text-warning">{textWarning}</p>
                <button
                    onClick={openModal}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        color: isHovered ? 'var(--blanco)' : color,
                        borderColor: color,
                        backgroundColor: isHovered ? color : 'var(--blanco)',
                    }}
                    className="button-close"
                >
                    {textButton}
                </button>
            </div>
        </div>
    );
};

export default ModalWarning;
