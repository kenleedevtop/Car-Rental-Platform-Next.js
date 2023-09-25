import { IBooking } from 'api/bookings/types';
import React from 'react';

export type TBookingStatusProps = React.HTMLAttributes<HTMLDivElement> & {
  booking: IBooking | null;
  userId: number | null;
  carId: number | null;
  status: string;
  reload: any;
};
