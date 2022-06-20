import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/City.css';

const City = () => {
  return (
    <div className="container">
      <div className="globe">
        <AiOutlineGlobal className="globe-icon" size={120}/>
      </div>

      <div className="city-index">
        <p className="">Pollutants</p>
        <p>Views</p>
      </div>
    </div>
  )
};

export default City;