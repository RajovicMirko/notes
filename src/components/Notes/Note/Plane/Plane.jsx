import React from "react";

const defaultProps = {
  id: "",
  description: "",
  onClick: () => {},
};

function NotePlane(props) {
  const _handleClick = () => props.onClick(props.id);

  return (
    <li onClick={_handleClick}>
      <p>{props.description}</p>
    </li>
  );
}

NotePlane.defaultProps = defaultProps;
export default NotePlane;
