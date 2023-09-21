import { ICar } from 'api/cars/types';
import React from 'react';

export type TChangePasswordModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  car: ICar | null;
};