import React, { useEffect, useState } from 'react';
import {
  LoginTitle,
  LoginSubtitle,
  LoginSpan,
  LoginAction,
  LoginLocalization,
} from 'features/login/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { Stack } from 'components/system';
import { useModal, useSnackbar } from 'hooks';
import {
  LostPasswordModal,
  ConfirmRegistrationModal,
} from 'features/login/elements';
import { useRouter } from 'next/router';
import { useAppContext } from 'context';
import { useTranslation } from 'next-i18next';
import { TLoginParams } from 'api/authorization/types';
import { AxiosError } from 'axios';
import { emailSchema } from 'utilities/validators';

const Login = () => {
  const [state, setState] = useState<TLoginParams>({
    email: '',
    password: '',
  });

  const { t } = useTranslation('login');

  const [lpModal, openLpModal, closeLpModal] = useModal(false);
  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const router = useRouter();
  const { push: pushSnackbar } = useSnackbar();

  const { login } = useAppContext();

  const [errors, setErrors] = useState([false]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const handleLogin = async () => {
    try {
      await login(state);

      router.push('/');
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        if (
          e.response.data.message ===
          'User not verified, please check your email inbox'
        ) {
          openCrModal();
        } else if (
          e.response.data.message === 'Too many confirmation resend requests!'
        ) {
          openCrModal();
        } else {
          pushSnackbar(e.response.data.message, { variant: 'error' });
        }
      }
    }
  };

  const isDisabled = !state.email || !state.password || !!errors.find((x) => x);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && !isDisabled) {
      handleLogin();
    }
  };

  return (
    <Stack onKeyDown={handleKeyDown}>
      <LoginTitle>{t('Login Now')}</LoginTitle>
      <LoginSubtitle>
        {t('Sign in to access elite supercar co-ownership options.')}
      </LoginSubtitle>
      <Input
        type="text"
        label={t('Email') as string}
        placeholder={t('Please Enter your Email') as string}
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
        label={t('Password') as string}
        placeholder={t('Please Enter your Password') as string}
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
      />
      <LoginAction direction="horizontal">
        <LoginSpan onClick={openLpModal}>{t('Lost your password?')}</LoginSpan>
      </LoginAction>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleLogin}
        disabled={isDisabled}
      >
        {t('LOGIN NOW')}
      </Button>
      {lpModal && <LostPasswordModal onClose={closeLpModal} />}
      {crModal && (
        <ConfirmRegistrationModal
          count={1}
          email={state.email}
          onClose={closeCrModal}
        />
      )}
    </Stack>
  );
};

export default Login;
