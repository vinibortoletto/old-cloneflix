import { useEffect, useState } from 'react';

export default function useGetWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function getWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return width;
}
