import React from 'react';
import '../../scss/Form.css'

const Form = ({ onChange }) => {

  return (
    <div className="form-container d-flex">
    <form>
      <input type="text" placeholder="Country" onChange={onChange}></input>
      <button type="submit">SEARCH</button> 
    </form>
  </div>
  );
}

export default Form;