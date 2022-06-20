import React from 'react';
// import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/HolidayCard.css';

const Holidays = () => {

  return (
    <ul className="holiday-list">
      <li className="city-index">New Year 1/1/2022</li>

      <li className="city-index">Boxing Day 26/5/2022</li>

      <li className="city-index">Democracy Day 12/6/2022</li>

      <li className="city-index">Health Day 56/4/2022</li>
    </ul>
  );
};

export default Holidays;