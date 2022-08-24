import React from 'react';
import NotesContent from './NotesContent';
import notes from '../notes';






const Note = () => {
    return (
        <div >
           {notes.map((note)=> <NotesContent
       key= {note.key}
        title={note.title}
        content={note.content}
    />)}
                    </div>
    );
}

export default Note;