import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  // Adding new note to an array.
  function addNote(inputText) {
    setNotes((previousItem) => {
      return [...previousItem, inputText];
    });
  }

  //- Using the filter function to filter out the item that needs deletion.
  function deleteNote(id) {
    setNotes((previousNote) => {
      return previousNote.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      {/* Take array and render seperate Note components for each item. */}
      <CreateNote addNote={addNote} />
      {/* Pass a id over to the Note component, pass it back to the App when
      deleting. */}
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onClicked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};
export default App;
