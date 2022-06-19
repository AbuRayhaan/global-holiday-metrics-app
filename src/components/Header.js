import React from 'react';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import '../scss/Header.css';

const Header = () => (
  <header className="d-flex">
    <div className="nav-menu d-flex">
      {/* <NavLink to="/" className=""> */}
        <FaAngleLeft className="" />
        <span>CITY LIST</span>
      {/* </NavLink> */}
    </div>
    <div className="nav-icons d-flex">
      <FaMicrophone />
      <FaCog />
    </div>
  </header>
);

export default Header;