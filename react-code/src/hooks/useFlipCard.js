import { useCallback } from "react";

export default function useFlipCard() {
  const onClick = useCallback((e) => {
    const card = e.currentTarget;
    card.classList.toggle('flipped');
  }, []);

  return { onClick };
}

