import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../styles/Components/Dropdown.css';

export const Dropdown = ({ title, items }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <li className='dropdown-list'>
          <div className='dropdown-link' onClick={() => setSubMenuOpen(!subMenuOpen)}>
            <FaRegCalendarAlt />{title}
            <span className={`dropdown-arrow ${subMenuOpen ? 'open' : ''}`}>▼</span>
          </div>
      <ul className={`dropdown-sub ${subMenuOpen ? 'open' : ''}`}>
            {items.map((item, index) => (
                <li className='dropdown-li' key={index}>
                    <Link to={item.link} className='dropdown-anchor'>
                      {item.label}
                    </Link>
                </li>
            ))}
      </ul>
    </li>
  );
};


