import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.css';

function TableRow(props) {
  const { recording, removeRecording, editRecording } = props;

  return ( 
    <tr className="table-row">
      <td>{recording.date}</td>
      <td>{recording.distance}</td>
      <td><button onClick={() => editRecording(recording.id)}>Изменить</button><button onClick={() => removeRecording(recording.id)} className="delete-button">x</button></td>
    </tr>
  )
}

TableRow.propTypes = {
  recording: PropTypes.object.isRequired,
  removeRecording: PropTypes.func.isRequired,
  editRecording: PropTypes.func.isRequired
}

export default TableRow;