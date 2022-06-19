import React from 'react';
import { FaExclamationTriangle, FaRegArrowAltCircleRight } from 'react-icons/fa';
import '../../scss/Form.css'
const Form = () => (
  <div className="form-container d-flex">
    <p>SEARCH COUNTRY</p>
    <form>
      <input type="number" placeholder="Country"></input>
      {/* <input type="number" placeholder="Longitude"></input> */}
      <button type="submit">SEARCH</button> 
    </form>
  </div>
)

export default Form;