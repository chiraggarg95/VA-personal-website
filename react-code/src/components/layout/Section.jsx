import React from "react";

function Section({ className = "", as: Tag = 'section', children, ...props }) {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

export default Section;

