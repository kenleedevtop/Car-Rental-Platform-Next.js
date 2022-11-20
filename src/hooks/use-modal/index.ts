import { useState } from 'react';

const useModal = (initialState: boolean): any => {
  const [open, setOpen] = useState<boolean>(initialState);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return [open, handleOpen, handleClose];
};

export default useModal;
