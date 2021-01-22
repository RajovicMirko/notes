import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import NotesList from "components/Notes/NotesList";
import { Note } from "models/Note";

const data = [
  { id: "1", description: "Note 1", isDone: false },
  { id: "2", description: "Note 2", isDone: true },
  { id: "3", description: "Note 3", isDone: false },
  { id: "4", description: "Note 4", isDone: false },
  { id: "5", description: "Note 5", isDone: true },
  { id: "6", description: "Note 6", isDone: false },
  { id: "7", description: "Note 7", isDone: false },
];

function Notes() {
  const [notes, setNotes] = useState([]);

  const sortNotesByDone = (notes) => notes.sort((a, b) => a.isDone - b.isDone);

  const initState = () => {
    const newNotes = data.map((note) => new Note(note));
    const sorted = sortNotesByDone(newNotes);
    setNotes(sorted);
  };
  useEffect(() => initState(), []);

  const handleItemClick = (id) => {
    const state = Object.assign([], notes);
    state[notes.findIndex((note) => note.id === id)].changeDone();
    const sorted = sortNotesByDone(state);
    setNotes(sorted);
  };

  return (
    <Container>
      <h1>Notes page</h1>
      <NotesList data={notes} onItemClick={handleItemClick} />
    </Container>
  );
}

export default Notes;
