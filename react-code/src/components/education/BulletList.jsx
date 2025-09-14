import React from "react";

function BulletList({ items = [] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="bullets">
      {items.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
    </ul>
  );
}

export default BulletList;

