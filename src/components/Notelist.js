import React from 'react';
import Note from './Note';
import notes from '../notes';

function NoteList () {
    const notesArray = notes.map(note => {
        return (
        <Note
                key={note.id}
                title={note.title}
                noteContent={note.noteContent} />
        )
    })
    return (
        <div>
            {notesArray}
        </div>
    )
}

export default NoteList;