import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/investor/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/account/role/investor/elements/change-password-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useAppContext } from 'context';
import { ClientAPI } from 'api';
import { useSnackbar } from 'hooks';

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
            label="Seller"
            placeholder="Please Select"
            value={null}
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Buyer"
            placeholder="Please Select"
            value={null}
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Shares"
            placeholder="Please Select"
            value={null}
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Transfer Date"
            placeholder="Please Select"
            value={null}
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Remaining Days [Year]"
            placeholder="Please Select"
            value={null}
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Reserved Days [Year]"
            placeholder="Please Select"
            value={null}
            onValue={() => {}}
          />
          <Input
            type="select"
            label="Remaining Days [Year]"
            placeholder="Please Select"
            value={null}
            onValue={() => {}}
          />
        </ChangePasswordModalMain>
      </Stack>
    </Modal>
  );
};

export default ChangePasswordModal;
