import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TChangePasswordModalProps } from 'features/account/role/user/elements/change-password-modal/types';
import { ChangePasswordModalMain } from 'features/account/role/user/elements/change-password-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useSnackbar } from 'hooks';
import { AuthorizationAPI } from 'api';
import { passwordSchema } from 'utilities/validators';

const ChangePasswordModal = ({
  onClose,
  ...props
}: TChangePasswordModalProps) => {
  const [state, setState] = useState({
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  });
  const [errors, setErrors] = useState([false, false]);
  const isDisabled =
    !state.oldPassword ||
    !state.newPassword ||
    !!errors.find((x) => x) ||
    !state.repeatNewPassword;

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const { push } = useSnackbar();

  const changePassword = async () => {
    try {
      await AuthorizationAPI.adminResetPassword(
        state.oldPassword,
        state.newPassword
      );
      push('Password successfully updated!', { variant: 'success' });
      onClose();
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
      onClose();
    }
  };

  return (
    <Modal
      size="small"
      title="Do you want to change password?"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={isDisabled}
          onClick={changePassword}
        >
          Change password
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <ChangePasswordModalMain columns={1}>
          <Input
            type="password"
            required
            label="Enter old password"
            placeholder="Please Enter"
            value={state.oldPassword}
            onValue={(oldPassword) => setState({ ...state, oldPassword })}
            validators={[
              {
                message: 'Old password is required',
                validator: (password) => {
                  const v = password as string;
                  if (v.trim()) return true;
                  return false;
                },
              },
            ]}
          />
          <Input
            type="password"
            label={'New Password'}
            required
            placeholder={'Please Enter your Password'}
            value={state.newPassword}
            onValue={(newPassword) => setState({ ...state, newPassword })}
            errorCallback={handleErrors(0)}
            validators={[
              {
                message: 'New Password is required',
                validator: (password) => {
                  const v = password as string;
                  if (v.trim()) return true;
                  return false;
                },
              },
              {
                message:
                  'Password must have at least one uppercase, lowercase letter, number and symbol',
                validator: (password) => {
                  try {
                    passwordSchema.validateSync({ password });
                    return true;
                  } catch {
                    return false;
                  }
                },
              },
            ]}
          />
          <Input
            type="password"
            label="Repeat new password"
            placeholder="Please Enter"
            value={state.repeatNewPassword}
            onValue={(repeatNewPassword) =>
              setState({ ...state, repeatNewPassword })
            }
            errorCallback={handleErrors(1)}
            validators={[
              {
                message: 'New Password and Confirm Password should be same',
                validator: (password) => {
                  const v = password === state.newPassword;
                  if (v) return true;
                  return false;
                },
              },
            ]}
          />
        </ChangePasswordModalMain>
      </Stack>
    </Modal>
  );
};

export default ChangePasswordModal;
