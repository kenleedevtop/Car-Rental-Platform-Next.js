import React from 'react';
import { Modal } from 'components/custom';
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
    title="Booking Overview"
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
          label="User"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="select"
          label="House"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="date"
          label="Start Date"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="select"
          label="Year"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="text"
          label="Shares"
          placeholder="Please Enter"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="text"
          label="Used Days"
          placeholder="Please Enter"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="select"
          label="Reserved Days"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
        <Input
          type="select"
          label="Remaining Days"
          placeholder="Please Select"
          value={null}
          onValue={() => {}}
        />
      </ChangePasswordModalMain>
    </Stack>
  </Modal>
);

export default ChangePasswordModal;
