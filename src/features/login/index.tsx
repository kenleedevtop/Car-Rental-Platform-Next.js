import React, { useState } from 'react';
import {
  LoginTitle,
  LoginSubtitle,
  LoginSpan,
  LoginAction,
} from 'features/login/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useModal, useSnackbar } from 'hooks';
import { LostPasswordModal, MaintenanceModal } from 'features/login/elements';
import { useRouter } from 'next/router';
import { useAppContext } from 'context';
import { TLoginParams } from 'api/authorization/types';

const Login = () => {
  const [state, setState] = useState<TLoginParams>({
    email: '',
    password: '',
  });

  const [lpModal, openLpModal, closeLpModal] = useModal(false);
  const [mtModal, openMtModal, closeMtModal] = useModal(false);

  const router = useRouter();
  const { push } = useSnackbar();

  const { login } = useAppContext();

  const handleLogin = async () => {
    try {
      openMtModal();
      // await login(state);
      // router.push('/');
    } catch (e: any) {
      push(`${e.response.data.message} 🤡`, {
        variant: 'error',
      });
    }
  };

  const isDisabled = !state.email.trim() || !state.password.trim();

  return (
    <Stack>
      <LoginTitle>Login Now</LoginTitle>
      <LoginSubtitle>
        Access updates, new opportunities, and messages all in one place by
        logging in below.
      </LoginSubtitle>
      <Input
        type="text"
        label="Email"
        value={state.email}
        onValue={(email) => setState({ ...state, email })}
      />
      <Input
        type="password"
        label="Password"
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
      />
      <LoginAction direction="horizontal">
        <Checkbox label="Remember Me" />
        <LoginSpan onClick={openLpModal}>Lost your password?</LoginSpan>
      </LoginAction>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleLogin}
        disabled={isDisabled}
      >
        LOGIN NOW
      </Button>
      {lpModal && <LostPasswordModal onClose={closeLpModal} />}
      {mtModal && <MaintenanceModal onClose={closeMtModal} />}
    </Stack>
  );
};

export default Login;
