import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/CountryCard.css';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { FetchCountry } from '../../redux/country/country';
import Form from '../../components/home/Form';

const HomeCity = () => {
  const country = useSelector((state) => state.country);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCountry());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDisplayedCountries(country);
  }, [country]);

  const searchHandler = (n) => {
    const countries = n.target.value;
    const list = country.filter((e) => e.countryName.includes(countries));
    console.log(countries);
    setDisplayedCountries(list);
  }

  return (
    <section>
      <Form onChange={searchHandler}/>
      <ul className="country-list">
        {displayedCountries.map((
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
    </section>
  );
};

export default HomeCity;