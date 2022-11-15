import { useEffect, useRef, useState } from 'react';

const useMenu = (initialState: boolean): any => {
  const menuRef = useRef<any>(null);

  const [open, setOpen] = useState<boolean>(initialState);
  const openRef = useRef<boolean>(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const trackClick = (e: MouseEvent) => {
      if (!menuRef.current || !openRef.current) return;

      if (
        e.target !== menuRef.current &&
        !menuRef.current.contains(e.target) &&
        openRef.current
      ) {
        e.stopPropagation();
        setOpen(false);
      }
    };

    window.addEventListener('click', trackClick, true);

    return () => {
      window.removeEventListener('click', trackClick);
    };
  }, []);

  return [menuRef, open, setOpen];
};

export default useMenu;
