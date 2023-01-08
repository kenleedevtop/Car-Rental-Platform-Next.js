import React, { useEffect, useState } from 'react';
import {
  LoginTitle,
  LoginSubtitle,
  LoginSpan,
  LoginAction,
} from 'features/login/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useModal, useSnackbar } from 'hooks';
import { LostPasswordModal } from 'features/login/elements';
import { useRouter } from 'next/router';
import { useAppContext } from 'context';
import { TLoginParams } from 'api/authorization/types';
import { emailSchema, passwordSchema } from 'utilities/validators';

const Login = () => {
  const [state, setState] = useState<TLoginParams>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState([false, false]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [lpModal, openLpModal, closeLpModal] = useModal(false);

  const router = useRouter();
  const { push } = useSnackbar();

  const { login } = useAppContext();

  const handleLogin = async () => {
    try {
      await login(state);
      router.push('/');
    } catch (e: any) {
      push(`${e.response.data.message} 🤡`, {
        variant: 'error',
      });
    }
  };

  const isDisabled = !state.email || !state.password || !!errors.find((x) => x);

  return (
    <Stack>
      <LoginTitle>Login Now</LoginTitle>
      <LoginSubtitle>
        Access updates, new opportunities, and messages all in one place by
        logging in below.
      </LoginSubtitle>
      <Input
        type="text"
        label="Username or email"
        value={state.email}
        onValue={(email) => setState({ ...state, email })}
        errorCallback={handleErrors(0)}
        validators={[
          {
            message: 'Email is required',
            validator: (email) => {
              const v = email as string;
              if (v.trim()) return true;
              return false;
            },
          },
          {
            message: 'Not a valid email format',
            validator: (email) => {
              try {
                emailSchema.validateSync({ email });
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
        label="Password"
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
        errorCallback={handleErrors(1)}
        validators={[
          {
            message: 'Password is required',
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
    </Stack>
  );
};

export default Login;
