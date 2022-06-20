import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/GlobalHoliday.css';

const City = () => {
  return (
    <div className="country-details">
      <div className="globe">
        <AiOutlineGlobal className="globe-icon" size={80}/>
      </div>

      <div className="project-title">
        <p className="">Tanzania</p>
        <p>15</p>
      </div>
    </div>
  )
};

export default City;