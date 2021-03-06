import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import '../../scss/GlobalHoliday.scss';

const GlobalHoliday = () => (
  <div className="global-details">
    <div className="globe">
      <AiOutlineGlobal className="globe-icon" size={80} />
    </div>

    <div className="project-title">
      <p>Global holidays in 251 countries.</p>
    </div>
  </div>
);

export default GlobalHoliday;
