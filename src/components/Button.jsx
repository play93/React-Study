import React from "react";

const Button =({children, onClick, color}) => {
  if (color) {
    return (
      <button style={{
        backgroundColor: color,
        color: "white"
      }} onClick={onClick}>{children}</button>
    )
  }
  return <button onClick={onClick}>{children}</button>
};

export default Button;
