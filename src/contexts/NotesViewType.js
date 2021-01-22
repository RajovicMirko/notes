import React, { createContext, useState } from "react";
import NotePlane from "components/Notes/Note/Plane";
import NoteTodo from "components/Notes/Note/Todo";

const NotesViewTypeContext = createContext();

const defaultProps = {
  children: null,
};

function NotesViewTypeProvider({ children }) {
  const [notesViewType, setNotesViewType] = useState("todo");
  const isPlane = notesViewType === "plane";

  const notesViewTypeOptions = [
    { value: "plane", text: "Plane" },
    { value: "todo", text: "To-do" },
  ];
  const listItemsByType = {
    plane: NotePlane,
    todo: NoteTodo,
  };

  const changeNotesViewType = (type) => setNotesViewType(type);
  const NoteListItem = (props) => listItemsByType[notesViewType](props);

  const provide = {
    notesViewTypeOptions,
    notesViewType,
    changeNotesViewType,
    NoteListItem,
    isPlane,
  };

  return (
    <NotesViewTypeContext.Provider value={provide}>
      {children}
    </NotesViewTypeContext.Provider>
  );
}

NotesViewTypeProvider.defaultProps = defaultProps;
export { NotesViewTypeContext, NotesViewTypeProvider };
