import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
  const { type, grey, secondary, primary } = theme.palette;

  return {
    root: {
      minWidth: 275,
      marginBottom: "1rem",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.01)",
      },
      "&:focus": {
        backgroundColor: grey[400],
      },
      "& p": {
        textDecoration: "none",
        color: primary[type],
      },
    },
    desc: {
      display: "inline-block",
      margin: "0.5rem",
    },
    done: {
      opacity: "0.3",
      "& p": {
        textDecoration: "line-through",
        color: secondary[type],
      },
    },
  };
});

const defaultProps = {
  id: "",
  description: "",
  done: false,
  onClick: () => {},
};

function NoteTodo(props) {
  const classes = useStyles(props);
  const _handleClick = () => props.onClick(props.id);

  return (
    <Card
      className={clsx(classes.root, { [classes.done]: props.isDone })}
      onClick={_handleClick}
    >
      <Typography className={classes.desc}>{props.description}</Typography>
    </Card>
  );
}

NoteTodo.defaultProps = defaultProps;
export default NoteTodo;
