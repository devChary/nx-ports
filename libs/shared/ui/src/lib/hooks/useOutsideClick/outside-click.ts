import { useState, useEffect, RefObject } from 'react';

function useOutsideClick(ref: RefObject<HTMLElement>) {
  const [isClickedOutside, setClickedOutside] = useState(false);

  function onMouseDown(event: any): void {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setClickedOutside(true);
      return;
    }
    setClickedOutside(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  return isClickedOutside;
}

export { useOutsideClick };
