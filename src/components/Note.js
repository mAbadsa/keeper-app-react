import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.noteContent}</p>
      <button onClick={ props.onHandleClick}>Delete</button>
    </div>
  );
}

export default Note;
