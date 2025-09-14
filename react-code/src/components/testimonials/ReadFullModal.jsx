import React, { useEffect, useRef } from "react";

export default function ReadFullModal({ open, onClose, quote, authorName }) {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    // focus the close button when opened
    closeBtnRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="t-modal" role="dialog" aria-modal="true" aria-label="Full testimonial" ref={overlayRef} onClick={(e) => { if (e.target === overlayRef.current) onClose?.(); }}>
      <div className="t-modal__content">
        <button ref={closeBtnRef} className="t-modal__close" aria-label="Close" onClick={onClose}>×</button>
        <div className="t-modal__body">
          <p className="t-modal__quote">“{quote}”</p>
          {authorName && <div className="t-modal__author">— {authorName}</div>}
        </div>
      </div>
    </div>
  );
}

