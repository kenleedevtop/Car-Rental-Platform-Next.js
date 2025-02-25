import { IBooking } from 'api/bookings/types';
import { ICar } from 'api/cars/types';
import React from 'react';

export type TChangePasswordModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  car: any | null;
};