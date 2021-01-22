import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "0 1rem",
    minWidth: 120,
    borderColor: theme.palette.common.white,
  },
  label: {
    color: "inherit",
  },
  select: {
    color: "inherit",
  },
}));

const defaultProps = {
  id: "",
  label: "",
  options: [{ value: "test", text: "Test option" }],
  value: "",
  onChange: () => {},
};

function SelectCustom(props) {
  const classes = useStyles();
  const _handleChange = (event) => props.onChange(event);

  return (
    <FormControl
      className={classes.formControl}
      variant="outlined"
      size="small"
    >
      <InputLabel className={classes.label} id={props.id}>
        {props.label}
      </InputLabel>
      <Select
        className={classes.select}
        autoWidth
        labelId={props.id}
        id={props.id}
        value={props.value}
        onChange={_handleChange}
      >
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SelectCustom.defaultProps = defaultProps;
export default SelectCustom;
