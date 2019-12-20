import React from "react";

function CreateArea() {
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Title"/>
        <textArea name="content" placeholder="Take a note..." rows="3"></textArea>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
