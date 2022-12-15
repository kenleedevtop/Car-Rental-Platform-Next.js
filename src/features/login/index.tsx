import React, { useState } from 'react';
import {
  LoginTitle,
  LoginSubtitle,
  LoginSpan,
  LoginAction,
} from 'features/login/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useModal } from 'hooks';
import { LostPasswordModal } from 'features/login/elements';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [lpModal, openLpModal, closeLpModal] = useModal(false);

  const router = useRouter();

  const handleLogin = () => {
    Cookies.set('x-auth-token', `${state.email}_${state.password}`, {
      expires: 1,
    });
    router.push('/');
  };

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
        type="text"
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
      >
        LOGIN NOW
      </Button>
      {lpModal && <LostPasswordModal onClose={closeLpModal} />}
    </Stack>
  );
};

export default Login;
