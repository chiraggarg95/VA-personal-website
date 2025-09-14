import React from "react";

function Avatar({ name, src }) {
  if (!src) {
    const initial = name ? name.charAt(0).toUpperCase() : "?";
    return <div className="t-avatar t-avatar--fallback" aria-hidden="true">{initial}</div>;
  }
  return <img className="t-avatar" src={src} alt={`${name} avatar`} loading="lazy" />;
}

function OrgLogo({ org, src }) {
  if (!src) return null;
  return <img className="t-orglogo" src={src} alt={`${org} logo`} loading="lazy" />;
}

export default function TestimonialCard({ item, clampLines = 6, showReadFull = false, onReadFull }) {
  const { quote, author = {}, orgLogoUrl } = item;
  const { name, role, org, avatarUrl } = author || {};

  return (
    <article className="t-card" role="group" aria-roledescription="slide">
      <p
        className="t-quote"
        style={{ WebkitLineClamp: clampLines }}
      >
        “{quote}”
      </p>
      {showReadFull && onReadFull && (
        <button className="t-readfull" type="button" onClick={onReadFull}>
          Read full
        </button>
      )}
      <div className="t-authorrow">
        <Avatar name={name} src={avatarUrl} />
        <div className="t-authorinfo">
          <div className="t-authorname">{name}</div>
          {(role || org) && <div className="t-authorrole">{[role, org].filter(Boolean).join(" · ")}</div>}
        </div>
        <OrgLogo org={org} src={orgLogoUrl} />
      </div>
    </article>
  );
}

