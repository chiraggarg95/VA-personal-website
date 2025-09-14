import React from "react";

function Tag({ children, className = '', ...props }) {
  return (
    <span className={className || ''} {...props}>{children}</span>
  );
}

export default Tag;

