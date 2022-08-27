import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Zoom, Fab } from '@mui/material';

const CreateNote = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //- Creating a constant that keeps track of the title and content.
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }
  //- Passing the new note back to the App.
  function submitNote(event) {
    props.addNote(inputText);
    setInputText({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="form">
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputText.title}
          />
        ) : null}
        <textarea
          onChange={handleChange}
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          value={inputText.content}
          row={!isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon color="primary" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
