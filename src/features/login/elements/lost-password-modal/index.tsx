import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TLostPasswordModalProps } from 'features/login/elements/lost-password-modal/types';
import {
  LostPasswordModalMain,
  LostPasswordTitle,
  LostPasswordText,
} from 'features/login/elements/lost-password-modal/styles';
import { Button, Input } from 'components/ui';
import { AuthorizationAPI } from 'api';
import { useSnackbar } from 'hooks';
import { emailSchema } from 'utilities/validators';

const LostPasswordModal = ({ onClose, ...props }: TLostPasswordModalProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const { push } = useSnackbar();

  const handleReset = async () => {
    try {
      const { message } = await AuthorizationAPI.resetPassword({ email });
      push(message, { variant: 'success' });
      onClose();
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const isDisabled = !email.trim() || error;

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
          errorCallback={setError}
          validators={[
            {
              message: 'Not a valid email format',
              validator: (v) => {
                try {
                  emailSchema.validateSync({ email: v });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleReset}
          disabled={isDisabled}
        >
          Send
        </Button>
      </LostPasswordModalMain>
    </Modal>
  );
};

export default LostPasswordModal;
