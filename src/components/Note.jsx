import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from '@mui/material';

const Note = (props) => {
  // Callback from the Note component to trigger a delete function.
  function handleClick() {
    props.onClicked(props.id);
  }

  return (
    <div className="note" onClick={handleClick}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab>
        <DeleteIcon />
      </Fab>
    </div>
  );
};

export default Note;
