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
  ComingSoonCompany,
  ComingSoonInfluencer,
  WelcomeModal,
  ConfirmRegistrationModal,
} from 'features/login/elements';
import { useRouter } from 'next/router';
import { useAppContext } from 'context';
import { useTranslation } from 'next-i18next';
import { TLoginParams } from 'api/authorization/types';
import { TLoginValidatingState } from 'features/login/types';
import { AuthorizationAPI } from 'api';
import { AxiosError } from 'axios';

const Login = () => {
  const [state, setState] = useState<TLoginParams>({
    email: '',
    password: '',
  });

  const { t } = useTranslation('login');

  const [lpModal, openLpModal, closeLpModal] = useModal(false);
  const [cscModal, openCscModal, closeCscModal] = useModal(false);
  const [csiModal, openCsiModal, closeCsiModal] = useModal(false);
  const [wlModal, openWlModal, closeWlModal] = useModal(false);
  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const [validatingState, setValidatingState] = useState<TLoginValidatingState>(
    {
      loading: false,
      role: null,
      error: false,
    }
  );

  const [loginState, setLoginState] = useState({
    role: '',
    affiliateLink: '',
  });

  const { query, push } = useRouter();
  const { push: pushSnackbar } = useSnackbar();

  const { login } = useAppContext();

  const handleLogin = async () => {
    try {
      const { role, affiliateLink } = await login(state);
      setLoginState({ role, affiliateLink });
      if (role.includes('INFLUENCER')) {
        openCsiModal();
      } else {
        openCscModal();
      }
      // push('/');
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        if (e.response.data.status === 'CREATED') {
          openCrModal();
          return;
        }
        pushSnackbar(`${e.response.data.message}`, {
          variant: 'error',
        });
      }
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
      if (query.token && query.id) {
        try {
          const token = query.token as string;
          const id = query.id as string;
          setValidatingState((x) => ({ ...x, loading: true }));
          openWlModal();
          const { role } = await AuthorizationAPI.verifyEmail({ token, id });
          setValidatingState((x) => ({
            ...x,
            role,
            loading: false,
          }));
        } catch {
          setValidatingState((x) => ({
            ...x,
            loading: false,
            error: true,
          }));
        }
      }
    };
    checkActivationCode();
  }, [query.token]);

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
      {cscModal && <ComingSoonCompany onClose={closeCscModal} />}
      {crModal && (
        <ConfirmRegistrationModal email={state.email} onClose={closeCrModal} />
      )}
      {csiModal && (
        <ComingSoonInfluencer
          affiliateLink={loginState.affiliateLink}
          onClose={closeCsiModal}
        />
      )}
      {wlModal && (
        <WelcomeModal
          error={validatingState.error}
          role={validatingState.role as any}
          onClose={handleWelcomeModalClose}
        />
      )}
    </Stack>
  );
};

export default Login;
