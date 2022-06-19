import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/City.css';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const HomeCity = () => {
  return (
    <div className="container">
      <div className="globe">
        <AiOutlineGlobal className="globe-icon" size={120}/>
      </div>

      <div className="city-index">
        <FaRegArrowAltCircleRight className="fa-icons" />
        <p className="">Lagos</p>
        <p>Holidays</p>
      </div>
    </div>
  )
};

export default HomeCity;