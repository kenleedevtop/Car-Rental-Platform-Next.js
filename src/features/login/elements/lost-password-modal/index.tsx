import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TLostPasswordModalProps } from 'features/login/elements/lost-password-modal/types';
import {
  LostPasswordModalMain,
  LostPasswordTitle,
  LostPasswordText,
} from 'features/login/elements/lost-password-modal/styles';
import { Button, Input } from 'components/ui';

const LostPasswordModal = ({ onClose, ...props }: TLostPasswordModalProps) => {
  const [email, setEmail] = useState('');

  return (
    <Modal size="medium" onClose={onClose} {...props}>
      <LostPasswordModalMain columns={1}>
        <LostPasswordTitle>Lost your password?</LostPasswordTitle>
        <LostPasswordText>
          Enter email to get password for recovery.
        </LostPasswordText>
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          onValue={(input) => setEmail(input)}
          style={{ width: '50%' }}
        />
        <Button variant="contained" color="secondary" size="large">
          Send
        </Button>
      </LostPasswordModalMain>
    </Modal>
  );
};

export default LostPasswordModal;
