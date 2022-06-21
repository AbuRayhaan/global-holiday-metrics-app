import React from 'react';
// import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/HolidayCard.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { AiOutlineGlobal } from "react-icons/ai";

const Holidays = () => {
  const holiday = useSelector((state) => state.holiday);
  const total = holiday.length;

  return (
    <section className="holiday-container">
      <div className="country-details">
        <div className="globe">
          <AiOutlineGlobal className="globe-icon" size={80}/>
        </div>

        <div className="project-title">
          <p className="">Total:</p>
          <p>{total}</p>
        </div>
      </div>

      <ul className="holiday-list">
        {holiday.map((
          {holidayName,
          holidayDate}
        ) => (
          <li className="holiday-item" key={holidayName}>
            <p className="holiday-name">{holidayName}</p>
            <p className="holiday-date">{holidayDate}</p>
          </li>
        )
        )}
      </ul>
    </section>
  );
};

export default Holidays;
