import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notelist from "./Notelist";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if(!newNote.title || !newNote.content) {
      return false;
    }
    setNotes(prevNotes => {
      return [...prevNotes,newNote]
    })
  }

  function handleDelete(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      <Notelist notesList={notes} onDelete={handleDelete}/>   
      <Footer />
    </div>
  );
}

export default App;
