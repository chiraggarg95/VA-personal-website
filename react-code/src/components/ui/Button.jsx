import React from "react";

function Button({ as: Tag = 'button', variant = '', className = '', children, ...props }) {
  const classes = ['btn'];
  if (variant) classes.push(variant);
  if (className) classes.push(className);
  return (
    <Tag className={classes.join(' ')} {...props}>
      {children}
    </Tag>
  );
}

export default Button;

