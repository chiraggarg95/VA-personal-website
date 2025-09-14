import React from "react";

function Grid({ className = '', children, ...props }) {
  return (
    <div className={className} {...props}>{children}</div>
  );
}

export default Grid;

