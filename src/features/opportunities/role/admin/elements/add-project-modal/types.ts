import { ICar } from 'api/cars/types';
import React from 'react';

export type TAddCarsModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  refresh: () => void;
};

export type TEditCarsModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  refresh: () => void;
  houseId: number;
};

export type TCarImage = {
  url: string;
  type: string;
  name: string;
  id: number;
  presignedUrl?: any;
};
