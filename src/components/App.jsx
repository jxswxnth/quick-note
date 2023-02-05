import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteItem = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((_note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main-area">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-area">
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteItem}
          />
        );
      })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
