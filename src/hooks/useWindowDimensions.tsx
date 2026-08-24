// Source - https://stackoverflow.com/a/59185109
// Posted by giovannipds, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-24, License - CC BY-SA 4.0
// Modified by Christian Irvine

import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width: number = hasWindow ? window.innerWidth : 0;
    const height: number = hasWindow ? window.innerHeight : 0;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}