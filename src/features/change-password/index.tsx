import React, { useState } from 'react';
import {
  ChangePasswordMain,
  ChangePasswordSubtitle,
} from 'features/change-password/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { useRouter } from 'next/router';
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
      <ChangePasswordSubtitle>Change your password.</ChangePasswordSubtitle>
      <Input
        type="text"
        label="New Password"
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
      />
      <Input
        type="text"
        label="Confirm Password"
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
