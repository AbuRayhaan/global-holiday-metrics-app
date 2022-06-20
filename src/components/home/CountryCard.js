import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/CountryCard.css';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { FetchCountry } from '../../redux/country/country';

const HomeCity = () => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(FetchCountry());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // console.log(country);

  return (
    <ul className="country-list">
      <li className="city-index">
        <NavLink to="/country">
          <FaRegArrowAltCircleRight className="fa-icons-right" />
        </NavLink>
        <p className="fa-icons-right">Nigeria</p>
        <p className="fa-icons-right">NG</p>
      </li>

      <li className="city-index">
        <NavLink to="/country">
          <FaRegArrowAltCircleRight className="fa-icons-right" />
        </NavLink>
        <p className="fa-icons-right">Nigeria</p>
        <p className="fa-icons-right">NG</p>
      </li>

      <li className="city-index">
        <NavLink to="/country">
          <FaRegArrowAltCircleRight className="fa-icons-right" />
        </NavLink>
        <p className="fa-icons-right">Nigeria</p>
        <p className="fa-icons-right">NG</p>
      </li>

      <li className="city-index">
        <NavLink to="/country">
          <FaRegArrowAltCircleRight className="fa-icons-right" />
        </NavLink>
        <p className="fa-icons-right">Nigeria</p>
        <p className="fa-icons-right">NG</p>
      </li>
    </ul>
    
  );
};

export default HomeCity;