import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/CountryCard.css';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { FetchCountry } from '../../redux/country/country';
// import { FetchHoliday } from '../../redux/country/holiday';

const HomeCity = () => {
  const country = useSelector((state) => state.country);
  // const holiday = useSelector((state) => state.holiday);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(FetchCountry());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   dispatch(FetchHoliday());
  // })

  return (
    <ul className="country-list">
      {country.map((
        {countryCode: id,
        countryName: name,}
      ) => (
        <li className="city-index" key={id}>
          <NavLink to={`/${id}`}>
            <FaRegArrowAltCircleRight className="fa-icons-right" />
          </NavLink>
          <p className="fa-icons-right">{name}</p>
          <p className="fa-icons-right">{id}</p>
          {/* <p className="fa-icons-right">{countHoliday(id)}</p> */}
        </li>
      )
      )}
    </ul>
  );
};

export default HomeCity;