import React, { Children, useEffect, useState } from 'react';
import { CombinedDatePicker, Modal } from 'components/custom';
import { TEditBookingModalProps } from './types';
import { ChangePasswordModalMain } from 'features/booking/role/user/elements/booking-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useAppContext } from 'context';
import { ApplicationAPI, ShareAPI } from 'api';
import BookingAPI from 'api/bookings';
import { useSnackbar } from 'hooks';
import { compareDates, dateFromObj } from 'utilities/calendar';

const ChangePasswordModal = ({
  onClose,
  booking,
  reload,
  ...props
}: TEditBookingModalProps) => {
  const [startDate, setStartDate] = useState<string>(booking ? booking.from : '');
  const [endDate, setEndDate] = useState<string>(booking ? booking.to : '');
  const { user } = useAppContext();
  const { push } = useSnackbar();
  const [share, setShare] = useState<any>();

  // const getShareWithCarId = async () => {
  //   try {
  //     if (car) {
  //       const response = await ShareAPI.getShareByCarIdUserId(car.id);
  //       if (response) {
  //         setShare(response);
  //       }
  //     }
  //   } catch (error) {
  //     push('Something went wrong!', { variant: 'error' });
  //   }
  // };
  // useEffect(() => {
  //   if (car)
  //     getShareWithCarId();
  // }, [car])
  const editApplication = async () => {
    try {
      const data = {
        carId: booking ? booking.car.id : 0,
        from: startDate ? startDate : '',
        to: endDate ? endDate : '',
      };
      const _startDate = booking ? booking.car.startDate : '';

      if (compareDates(_startDate, data.from, true)) {
        if (compareDates(data.from, data.to, false)) {

          await BookingAPI.editBooking(booking?.id, data);
          reload();
          push('Successfully booked.', { variant: 'success' });
          onClose();
        }
        else {
          push(`Your booking must ends after ${dateFromObj(data.from)}`, {
            variant: 'error',
          });
        }
      }
      else {
        push(`You can book from ${_startDate.split('T')[0]}`, {
          variant: 'error',
        });
      }
    } catch (error: any) {
      push(error.response ? error.response.data.message : 'Something went wrong with your booking ', {
        variant: 'error',
      });
    }
  };

  return (
    <Modal
      size="medium"
      title="Your Booking"
      actions={Children.toArray([
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={editApplication}
        >
          Edit
        </Button>,
      ])}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <ChangePasswordModalMain>
          <Input
            type="text"
            label="Car"
            placeholder="Please Select"
            value={booking ? booking.car.name : ''}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="User"
            placeholder="Please Select"
            value={booking?.owner.firstName + ' ' + booking?.owner.lastName}
            onValue={() => { }}
          />
          <CombinedDatePicker value={startDate} onValue={(e) => { setStartDate(e); }} label="Check-in" />
          <CombinedDatePicker value={endDate} onValue={(e) => { setEndDate(e); }} label="Checkout" />
        </ChangePasswordModalMain>
      </Stack>
    </Modal>
  );
}

export default ChangePasswordModal;
