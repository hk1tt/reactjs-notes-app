import React from 'react';
import { Link } from 'react-router-dom';

const AddedNotes = ({note}) => {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4> {note.title.length > 30 ? ((note.title.substr(0,30)) + ' ...' ) : note.title } </h4>
      {/* substr is for subtring length only shown on the app 
        ? is a cond. operator which evaluates the 
        "note.title" condition and returns the 
        'new value if true or the initial value when false
        (substr or whole title)*/}
      <p> {note.date} </p>
    </Link>
  )
}

export default AddedNotes