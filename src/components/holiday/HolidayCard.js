import React from 'react';
import '../../scss/HolidayCard.css';
import { useSelector } from 'react-redux';
import { AiOutlineGlobal } from 'react-icons/ai';

const Holidays = () => {
  const holiday = useSelector((state) => state.holiday);
  const total = holiday.length;

  return (
    <section className="holiday-container d-flex">
      <div className="country-details">
        <div className="globe">
          <AiOutlineGlobal className="globe-icon" size={80} />
        </div>

        <div className="holiday-title">
          <p className="">Total Holidays:</p>
          <p>{total}</p>
        </div>
      </div>

      <ul className="holiday-list d-flex">
        {holiday.map((
          { holidayName, holidayDate },
        ) => (
          <li className="holiday-item" key={holidayName}>
            <p className="holiday-name">{holidayName}</p>
            <p className="holiday-date">{holidayDate}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Holidays;
