import React from 'react';
import Holidays from './HolidayCard';
import '../../scss/HolidayList.css'

const HolidayList = () => {

  return (
    <div className="holiday-container">
      <Holidays />
    </div>
  );
};

export default HolidayList;