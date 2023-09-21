import React, { Children, useState } from 'react';
import { CombinedDatePicker, Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/booking/role/user/elements/booking-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useAppContext } from 'context';
import { ApplicationAPI } from 'api';
import BookingAPI from 'api/booking';
import { useSnackbar } from 'hooks';

const ChangePasswordModal = ({
  onClose,
  car,
  ...props
}: TChangePasswordModalProps) => {
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const { user } = useAppContext();
  const { push } = useSnackbar();

  const sendApplication = async () => {
    try {
      const data = {
        carId: car ? car.id : 1,
        from: startDate ? startDate : '',
        to: endDate ? endDate : '',
      };

      const book = await BookingAPI.Booking(data);
      onClose();
      push('Successfully booked.', { variant: 'success' });
    } catch {
      push('Something went wrong with your booking.', {
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
            label="User"
            placeholder="Please Select"
            value={`${user.firstName} ${user.lastName}`}
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
