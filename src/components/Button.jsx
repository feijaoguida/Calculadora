import React from "react";

import "./Button.css";

export default (props) => {
  /* Esta Variavel posse substituir o treço de codigo abaixo.
  let classes = 'button'
  classes += props.operation ? "operation " : ""
  classes += props.double ? "double" : ""
  classes += props.triple ? "triple" : ""
  */

  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={`
      button
      ${props.operation ? "operation " : ""}
      ${props.double ? "double" : ""}
      ${props.triple ? "triple" : ""}
    `}
    >
      {props.label}
    </button>
  );
};
