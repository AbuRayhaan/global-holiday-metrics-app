import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { FaExclamationTriangle, FaRegArrowAltCircleRight } from 'react-icons/fa';
import '../../scss/Form.css'

const Form = () => {
  const countries = useSelector((state) => state.country);
  // const [setDisplayedCountries] = useState([]);
  
  const searchHandler = (c) => {
  const country = c.target.value;
  const list = countries.filter((e) => e.countryName.includes(country));
  console.log(list);
  // setDisplayedCountries(list);
  }

  return (
    <div className="form-container d-flex">
    <form>
      <input type="text" placeholder="Country" onChange={searchHandler}></input>
      <button type="submit">SEARCH</button> 
    </form>
  </div>
  )
}

export default Form;