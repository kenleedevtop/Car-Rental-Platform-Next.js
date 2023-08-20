import React from 'react';
import { CombinedDatePicker, Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/investor/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/account/role/investor/elements/change-password-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ChangePasswordModal = ({
  onClose,
  ...props
}: TChangePasswordModalProps) => (
  <Modal
    size="medium"
    title="Your Booking"
    actions={[
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={onClose}
      >
        Close
      </Button>,
    ]}
    onClose={onClose}
    {...props}
  >
    <Stack>
      <ChangePasswordModalMain columns={2}>
        <Input
          type="select"
          label="House"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="select"
          label="User"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
        <CombinedDatePicker value={null} onValue={() => {}} label="Check-in" />
        <CombinedDatePicker value={null} onValue={() => {}} label="Checkout" />
      </ChangePasswordModalMain>
    </Stack>
  </Modal>
);

export default ChangePasswordModal;
