import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/Form.scss';

const Form = ({ onChange }) => (
  <div className="form-container d-flex">
    <form>
      <input type="text" placeholder="Search Country" onChange={onChange} />
    </form>
  </div>
);

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Form;
