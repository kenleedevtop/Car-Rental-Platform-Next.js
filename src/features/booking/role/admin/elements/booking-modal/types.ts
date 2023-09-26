import { IBooking } from 'api/bookings/types';
import React from 'react';

export type TEditBookingModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  reload: () => void;
  booking : IBooking | null;
};
