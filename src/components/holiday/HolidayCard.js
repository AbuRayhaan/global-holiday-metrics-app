import React from 'react';
// import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/HolidayCard.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Holidays = () => {
  const holiday = useSelector((state) => state.holiday);

  return (
    <ul className="holiday-list">
      {holiday.map((
        {holidayName,
        holidayDate}
      ) => (
        <li className="city-index" key={holidayName}>
          <p className="fa-icons-right">{holidayName}</p>
          <p className="fa-icons-right">{holidayDate}</p>
        </li>
      )
      )}
    </ul>
  );
};

export default Holidays;