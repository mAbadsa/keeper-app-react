import React from "react";
import Note from "./Note";
// import notes from '../notes';

function NoteList(props) {

    function handleClick(index) {
        props.onDelete(index);
    }

  const notesArray = props.notesList.map((note, index) => {
    return (
      <Note
        key={index}
        title={note.title}
        noteContent={note.content}
        onHandleClick={() => {
            handleClick(index)
        }}
      />
    );
  });
  return <div>{notesArray}</div>;
}

export default NoteList;
