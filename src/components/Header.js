import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import '../scss/Header.css';

const Header = () => (
  <header className="d-flex">
    <div className="nav-menu d-flex">
      <NavLink to="/" className="">
        <FaAngleLeft className="fa-icons" />
        <span>CITY LIST</span>
      </NavLink>
    </div>
    <div className="nav-icons d-flex">
      <FaMicrophone className="fa-icons" />
      <FaCog className="fa-icons" />
    </div>
  </header>
);

export default Header;