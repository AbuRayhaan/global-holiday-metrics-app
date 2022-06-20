import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import '../../scss/CountryList.css'

const CountryList = () => {
  const countries = useSelector((state) => state.country);

  console.log(countries);

  // const data =countries.map((rocket) => <CountryCard key={countries.CountryCode} rocket={rocket} />);
  // console.log(data);
  return (
    <div className="country-container">
      <CountryCard />
      {/* {data} */}
    </div>
  );
};

export default CountryList;