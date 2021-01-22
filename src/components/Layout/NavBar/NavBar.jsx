import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import HideOnScroll from "./HideOnScroll";

import { NotesViewTypeContext } from "contexts/NotesViewType";
import Select from "components/Select";

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function HideAppBar(props) {
  const classes = useStyles();
  const {
    notesViewType,
    notesViewTypeOptions,
    changeNotesViewType,
  } = useContext(NotesViewTypeContext);

  const handleChange = (event) => changeNotesViewType(event.target.value);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">Notes app</Typography>
          </Toolbar>

          <Select
            id="notes-type"
            label="Notes type"
            value={notesViewType}
            options={notesViewTypeOptions}
            onChange={handleChange}
          />
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
