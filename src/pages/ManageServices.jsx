import React from 'react';
import '../styles/Pages/ManageServices.css';
import Navigation from '../Layouts/Navigation';
import { Link } from 'react-router-dom';
import { ButtonFloating } from '../components/ButtonFloating';

function ServiceItem({ name, iconSrc, linkTo }) {
    return (
        <li className="button-service">
            <Link to={linkTo} className="service-link">
                <div className="name-container">
                    <h3 className="name-service">
                        {name}
                        <div className="container-image">
                            <img src={iconSrc} alt={`Icono-${name}`} />
                        </div>
                    </h3>
                </div>
                <div className="container-image arrow-icon">
                    <img src="././public/Images/mayorQue.png" alt="Flecha-icono" />
                </div>
            </Link>
        </li>
    );
} 


function ManageServices() {
    const services = [
        {
            name: "ODONTOLOGIA",
            iconSrc: "././public/Images/dienteIcon.png",
            linkTo: "/manageBenefits",
        },
        {
            name: "PSICOLOGIA",
            
            iconSrc: "././public/Images/divan.png",
            linkTo: "/manageBenefits",
        }
    ];

    return (
        <div className='manage-services'>
            <Navigation />
            <ul className="manage-services-list">
                {services.map((service, index) => (
                    <ServiceItem 
                        key={index}
                        name={service.name}
                        iconSrc={service.iconSrc}
                        linkTo={service.linkTo}
                    />
                ))}
            </ul>
            <ButtonFloating
                textButton={"Agregar Servicio"} 
                link="/createService" //useParams id del servicio    
            />
        </div>
    );
}

export default ManageServices;
