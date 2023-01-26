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
  MaintenanceModal,
  WelcomeModal,
} from 'features/login/elements';
import { useRouter } from 'next/router';
import { useAppContext } from 'context';
import { useTranslation } from 'next-i18next';
import { TLoginParams } from 'api/authorization/types';
import FakeAsync from 'utilities/fake-async';
import { TLoginValidatingState } from 'features/login/types';

const Login = () => {
  const [state, setState] = useState<TLoginParams>({
    email: '',
    password: '',
  });

  const { t } = useTranslation('login');

  const [lpModal, openLpModal, closeLpModal] = useModal(false);
  const [mtModal, openMtModal, closeMtModal] = useModal(false);
  const [wlModal, openWlModal, closeWlModal] = useModal(false);

  const [validatingState, setValidatingState] = useState<TLoginValidatingState>(
    {
      loading: false,
      role: null,
    }
  );

  const { query, push } = useRouter();
  const { push: pushSnackbar } = useSnackbar();

  const { login } = useAppContext();

  const handleLogin = async () => {
    try {
      // openMtModal();
      await login(state);
      push('/');
    } catch (e: any) {
      pushSnackbar(`${e.response.data.message} 🤡`, {
        variant: 'error',
      });
    }
  };

  const handleWelcomeModalClose = () => {
    if (validatingState.loading === false) {
      closeWlModal();
    }
  };

  const isDisabled = !state.email.trim() || !state.password.trim();

  useEffect(() => {
    const checkActivationCode = async () => {
      if (query.code) {
        setValidatingState((x) => ({ ...x, loading: true }));
        openWlModal();
        await FakeAsync(5000);
        setValidatingState((x) => ({
          ...x,
          role: 'influencer',
          loading: false,
        }));
      }
    };
    checkActivationCode();
  }, [query.code]);

  return (
    <Stack>
      <LoginTitle>{t('Login Now')}</LoginTitle>
      <LoginSubtitle>
        {t(
          'Access updates, new opportunities, and messages all in one place by logging in below.'
        )}
      </LoginSubtitle>
      <Input
        type="text"
        label={t('Email') as string}
        placeholder={t('Please Enter your Email') as string}
        value={state.email}
        onValue={(email) => setState({ ...state, email })}
      />
      <Input
        type="password"
        label={t('Password') as string}
        placeholder={t('Please Enter your Password') as string}
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
      />
      <LoginAction direction="horizontal">
        <Checkbox label={t('Remember Me') as string} />
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
      <LoginLocalization />
      {lpModal && <LostPasswordModal onClose={closeLpModal} />}
      {mtModal && <MaintenanceModal onClose={closeMtModal} />}
      {wlModal && (
        <WelcomeModal
          role={validatingState.role as any}
          onClose={handleWelcomeModalClose}
        />
      )}
    </Stack>
  );
};

export default Login;
