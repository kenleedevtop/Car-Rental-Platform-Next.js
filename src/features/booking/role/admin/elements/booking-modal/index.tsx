import React, { Children } from 'react';
import { CombinedDatePicker, Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/booking/role/admin/elements/booking-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ChangePasswordModal = ({
  onClose,
  ...props
}: TChangePasswordModalProps) => (
  <Modal
    size="medium"
    title="Your Booking"
    actions={Children.toArray([
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={onClose}
      >
        Close
      </Button>,
    ])}
    onClose={onClose}
    {...props}
  >
    <Stack>
      <ChangePasswordModalMain>
        <Input
          type="select"
          label="Supercar"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
        <Input
          type="select"
          label="User"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
        <CombinedDatePicker value="" onValue={() => {}} label="Check-in" />
        <CombinedDatePicker value="" onValue={() => {}} label="Checkout" />
      </ChangePasswordModalMain>
    </Stack>
  </Modal>
);

export default ChangePasswordModal;
