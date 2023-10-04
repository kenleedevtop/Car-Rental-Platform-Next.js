import React from 'react';
import { useMenu, useSnackbar } from 'hooks';
import {
  DeleteIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { TBookingStatusProps } from './types';
import {
  ApplicationStatusActionsMain,
  ApplicationStatusActionsMenu,
  ISpan,
} from './styles';
import { BookingAPI } from 'api';

const BookingStatusActions = ({
  reload,
  booking,
  userId,
  status,
  carId,

  ...props
}: TBookingStatusProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const { push } = useSnackbar();
  const handleMenu = () => {
    setOpen(!open);
  };

  const removeBooking = async (id: any) => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const bookingStartDate = new Date(booking ? booking.from : '');

      const daysUntilStart = (bookingStartDate.getTime() - today.getTime()) / (24 * 3600 * 1000);
      if (daysUntilStart >= 45) {
        await BookingAPI.removeBooking(id);
        push('Booking has been successfully cancelled!', { variant: 'success' });
        reload();
        handleMenu();
      }
      else {
        push('You can cancel the reservation at least 45 days before!', { variant: 'error' });
        handleMenu();
      }
    } catch (e: any) {

      push(e.response.data.message, { variant: 'error' });
    }
  };
  const ApplicationStatusActions = [
    {
      icon: <DeleteIcon />,
      label: 'Cancel',
      action: () => {
        removeBooking(booking ? booking.id : 0);
      },
    },
  ];

  return (
    <ApplicationStatusActionsMain>
      <ISpan ref={buttonRef}>
        <VerticalDotsIcon onClick={handleMenu} />
      </ISpan>
      {open && (
        <ApplicationStatusActionsMenu
          position={position}
          items={ApplicationStatusActions}
          ref={menu}
        />
      )}
    </ApplicationStatusActionsMain>
  );
};

export default BookingStatusActions;
