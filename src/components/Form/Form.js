import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './Form.css';
import Input from './Input/Input';

function Form(props) {
  const { setRecord, form, setForm } = props;
  
  const fields = [
    {
      id: 1,
      name: 'date',
      type: 'date',
      label: 'Дата (ДД.ММ.ГГ)'
    },
    {
      id: 2,
      name: 'distance',
      type: 'number',
      label: 'Пройдено км'
    }
  ];

  function handleChange({target}) {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setForm( prevForm =>{
      return {...prevForm, [name]: value}
    });
  };

  function formSubmitHandler(e) {
    e.preventDefault();
    if (!form.date || !form.distance) {
      alert('Заполните все поля!');
      return;
    }

    const record = {id: nanoid(), date: form.date, distance: form.distance};

    setRecord( prevState => {
      let recordedDate = prevState.find(elem => elem.date === form.date);
      
      if ( form.edit ) {
        return prevState.map(
          elem => elem.id === form.id ? {id: elem.id, date: form.date, distance: form.distance} : elem);
      }

      if ( recordedDate ) {
        return prevState.map(
          elem => elem.date === form.date ? {id: elem.id, date: elem.date, distance: +form.distance + +elem.distance} : elem);
      } else {
        return [...prevState, record];
      }
    });

    setForm({date: '', distance: ''});
  };

  const inputs = fields.map( field => {
    const params = {
      key: field.id,
      name: field.name,
      type: field.type,
      label: field.label,
      handleChange: handleChange,
      form: form
    };
    return (<Input {...params} />);
  } );

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      {inputs}
      <button className="main-input form-submit" type="submit">OK</button>
    </form>
  );
}

Form.propTypes = {
  setRecord: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
}

export default Form;
