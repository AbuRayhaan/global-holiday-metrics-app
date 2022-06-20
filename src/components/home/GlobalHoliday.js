import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/GlobalHoliday.css';

const GlobalHoliday = () => {
  return (
    <div className="country-details">
      <div className="globe">
        <AiOutlineGlobal className="globe-icon" size={80}/>
      </div>

      <div className="project-title">
        <p>Global Holidays</p>
      </div>
    </div>
  )
};

export default GlobalHoliday;