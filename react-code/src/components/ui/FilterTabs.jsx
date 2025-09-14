import React from "react";

function FilterTabs({ categories, active, onChange }) {
  return (
    <div className="filter-tabs">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`filter-btn${active === cat.value ? ' active' : ''}`}
          data-filter={cat.value}
          onClick={() => onChange(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;

