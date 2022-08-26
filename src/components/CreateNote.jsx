import React, { useState } from 'react';

const CreateNote = (props) => {
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
    props.addItem(inputText);
    event.preventDefault();
    setInputText({
      title: '',
      content: '',
    });
  }

  return (
    <div>
      <form className="form">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={inputText.content}
          row="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateNote;
