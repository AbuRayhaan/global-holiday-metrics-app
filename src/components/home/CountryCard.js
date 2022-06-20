import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { AiOutlineGlobal } from "react-icons/ai";
import '../../scss/CountryCard.css';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { FetchCountry } from '../../redux/country/country';

const HomeCity = ({ item }) => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(FetchCountry());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="country-list">
      {country.map((
        {countryCode: id,
        countryName: name,}
      ) => (
        <li className="city-index" key={id}>
          <NavLink to="/country">
            <FaRegArrowAltCircleRight className="fa-icons-right" />
          </NavLink>
          <p className="fa-icons-right">{name}</p>
          <p className="fa-icons-right">{id}</p>
        </li>
      )
      )}
    </ul>
  );
};

export default HomeCity;