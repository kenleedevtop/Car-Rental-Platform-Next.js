import React, { Children, useEffect, useState } from 'react';
import { CombinedDatePicker, Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/booking/role/user/elements/booking-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useAppContext } from 'context';
import { ApplicationAPI, ShareAPI } from 'api';
import BookingAPI from 'api/bookings';
import { useSnackbar } from 'hooks';
import { compareDates, dateFromObj, validateUntilEndOfTheYear } from 'utilities/calendar';

const ChangePasswordModal = ({
  onClose,
  car,
  ...props
}: TChangePasswordModalProps) => {
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const { user } = useAppContext();
  const { push } = useSnackbar();
  const [share, setShare] = useState<any>();

  const getShareWithCarId = async () => {
    try {
      if (car) {
        const response = await ShareAPI.getShareByCarId(car.id);
        if (response) {
          setShare(response);
        }
      }
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  useEffect(() => {
    if (car)
      getShareWithCarId();
  }, [car]);
  const sendApplication = async () => {
    try {
      const data = {
        carId: car ? car.id : 1,
        from: startDate ? startDate : '',
        to: endDate ? endDate : '',
      };
      const _startDate = car?.startDate || '';

      if (compareDates(_startDate, data.from, true)) {
        if (compareDates(data.from, data.to, false)) {

          if (validateUntilEndOfTheYear(_startDate, data.to)) {
            await BookingAPI.Booking(data);
            push('Successfully booked.', { variant: 'success' });
            onClose();
          }
          else {
            const startDate = new Date(_startDate);
            push(`Your booking must be until end of the ${startDate.getFullYear()}`, {
              variant: 'error',
            });
          }

        }
        else {
          push(`Your booking must ends after ${dateFromObj(data.from)}`, {
            variant: 'error',
          });
        }
      }
      else {
        push(`You can book from ${car?.startDate.split('T')[0]}`, {
          variant: 'error',
        });
      }
    } catch (error: any) {
      push(error.response.data.message ? error.response.data.message : 'Something went wrong with your booking ', {
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
          onClick={sendApplication}
        >
          Book
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
            value={car ? car.name : ''}
            onValue={() => { }}
          />
          <Input
            type="text"
            label="Days remaining"
            placeholder="Please Select"
            value={share ? share.availableDays : ''}
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
