import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.noteContent}</p>
      <button onClick={ props.onHandleClick}> <DeleteIcon/> </button>
    </div>
  );
}

export default Note;
