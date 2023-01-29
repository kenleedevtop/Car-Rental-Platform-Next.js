import React, { useState } from 'react';
import {
  ChangePasswordMain,
  ChangePasswordTitle,
} from 'features/reset-password/styles';
import { Button, Input } from 'components/ui';
import { useAppContext } from 'context';

const ChangePassword = () => {
  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
  });

  const { login } = useAppContext();

  const handleChange = async () => {};

  const isDisabled = !state.confirmPassword.trim() || !state.password.trim();

  return (
    <ChangePasswordMain>
      <ChangePasswordTitle>Change your password.</ChangePasswordTitle>
      <Input
        type="text"
        label="New Password"
        placeholder="Please Enter your New Password"
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
      />
      <Input
        type="text"
        label="Confirm Password"
        placeholder="Please Confirm your New Password"
        value={state.confirmPassword}
        onValue={(confirmPassword) => setState({ ...state, confirmPassword })}
      />
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleChange}
        disabled={isDisabled}
      >
        Change Password
      </Button>
    </ChangePasswordMain>
  );
};

export default ChangePassword;
