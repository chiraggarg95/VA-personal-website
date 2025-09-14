import React from "react";

function MediaImage({ src, alt, className = '', ...props }) {
  return (
    <img src={src} alt={alt} className={className} {...props} />
  );
}

export default MediaImage;

