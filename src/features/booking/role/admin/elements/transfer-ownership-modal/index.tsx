import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/applications/role/admin/elements/transfer-ownership-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ChangePasswordModal = ({
  onClose,
  ...props
}: TChangePasswordModalProps) => {
  const [state, setState] = useState({
    newPassword: '',
  });

  return (
    <Modal
      size="medium"
      title="Transfer Ownership"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Transfer
        </Button>,
      ]}
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
            label="Seller"
            placeholder="Please Select"
            value=""
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Buyer"
            placeholder="Please Select"
            value=""
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Shares"
            placeholder="Please Select"
            value=""
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Transfer Date"
            placeholder="Please Select"
            value=""
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Remaining Days [Year]"
            placeholder="Please Select"
            value=""
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Reserved Days [Year]"
            placeholder="Please Select"
            value=""
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Remaining Days [Year]"
            placeholder="Please Select"
            value=""
            onValue={() => {}}
          />
        </ChangePasswordModalMain>
      </Stack>
    </Modal>
  );
};

export default ChangePasswordModal;
