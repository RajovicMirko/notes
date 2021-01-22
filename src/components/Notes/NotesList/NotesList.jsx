import React, { useContext } from "react";
import { NotesViewTypeContext } from "contexts/NotesViewType";

const defaultProps = {
  data: [],
  onItemClick: () => {},
};

function NotesList(props) {
  const { NoteListItem, isPlane } = useContext(NotesViewTypeContext);

  const items = props.data.map((note) => {
    return <NoteListItem key={note.id} {...note} onClick={props.onItemClick} />;
  });

  return isPlane ? <ul>{items}</ul> : items;
}

NotesList.defaultProps = defaultProps;
export default NotesList;
