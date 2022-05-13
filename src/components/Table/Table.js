import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

function Table(props) {
  const { recordingsList } = props;

  return ( 
    <table className="recordings-table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {recordingsList}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  recordingsList: PropTypes.array.isRequired
}

export default Table;