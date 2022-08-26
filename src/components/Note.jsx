import React from 'react';

const Note = (props) => {
  // Callback from the Note component to trigger a delete function.
  function handleClick() {
    props.onClicked(props.id);
  }

  return (
    <div className="note" onClick={handleClick}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>Delete</button>
    </div>
  );
};

export default Note;
