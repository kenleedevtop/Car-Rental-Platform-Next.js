import React, { Children } from 'react';
import { Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/applications/role/admin/elements/booking-overview-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ChangePasswordModal = ({
  onClose,
  ...props
}: TChangePasswordModalProps) => (
  <Modal
    size="medium"
    title="Booking Overview"
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
          label="User"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
        <Input
          type="select"
          label="Supercar"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
        <Input
          type="date"
          label="Start Date"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
        <Input
          type="select"
          label="Year"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
        <Input
          type="text"
          label="Shares"
          placeholder="Please Enter"
          value=""
          onValue={() => {}}
        />
        <Input
          type="text"
          label="Used Days"
          placeholder="Please Enter"
          value=""
          onValue={() => {}}
        />
        <Input
          type="select"
          label="Reserved Days"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
        <Input
          type="select"
          label="Remaining Days"
          placeholder="Please Select"
          value=""
          onValue={() => {}}
        />
      </ChangePasswordModalMain>
    </Stack>
  </Modal>
);

export default ChangePasswordModal;
