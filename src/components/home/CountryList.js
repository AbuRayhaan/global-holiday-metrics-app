import React from 'react';
import CountryCard from './CountryCard';
import '../../scss/CountryList.css'

const CountryList = () => {
  return (
    <div className="country-container">
      <CountryCard />
    </div>
  );
};

export default CountryList;