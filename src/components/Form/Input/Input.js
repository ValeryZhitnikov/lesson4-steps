import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input(props) {
  const { name, type, label, form, handleChange } = props;

  return (
    <div className="form-group">
      <label className="label" htmlFor={name}>{label}</label>
      <input className="main-input" type={type} value={form[name]} name={name} id={name} onChange={handleChange}/>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Input;
