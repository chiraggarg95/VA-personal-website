import React from "react";

function Card({ className = '', children, ...props }) {
  return (
    <div className={className} {...props}>{children}</div>
  );
}

export default Card;

