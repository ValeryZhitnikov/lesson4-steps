import React, { useState } from 'react';
import './Steps.css';
import Form from '../Form/Form';
import Table from '../Table/Table';
import TableRow from '../Table/TableRow/TableRow';

function Steps() {
  const [recordings, setRecord] = useState([]);
  const [form, setForm] = useState({date: '', distance: ''});

  function handlerRemoveRecording(id) {
    setRecord(prevState => {
      return prevState.filter(recording => recording.id !== id);
    })
  };

  function handlerEditRecording(id) {
    const currentRecording = recordings.find(elem => elem.id === id);
    setForm({...currentRecording, edit: true});
  };

  const recordingsList = recordings
    .sort((a, b) => a.date < b.date ? 1 : -1)
    .map( recording => {
      return (
        <TableRow editRecording={handlerEditRecording} removeRecording={handlerRemoveRecording} key={recording.id} recording={recording} />
      )
  });

  return (
  <div className="steps">
    <Form form={form} setForm={setForm} setRecord={setRecord} />
    {recordings.length != 0 ? <Table recordingsList={recordingsList} /> : ''}
  </div> 
  );
}

export default Steps;
