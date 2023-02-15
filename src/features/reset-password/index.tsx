import React, { useState } from 'react';
import {
  ChangePasswordMain,
  ChangePasswordTitle,
  ChangePasswordLocalization,
} from 'features/reset-password/styles';
import { Button, Input } from 'components/ui';
import { useSnackbar } from 'hooks';
import { AuthorizationAPI } from 'api';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const ChangePassword = () => {
  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
  });

  const { t } = useTranslation('reset-password');

  const { push } = useSnackbar();

  const { query } = useRouter();

  const handleChange = async () => {
    try {
      if (query.token && state.password === state.confirmPassword) {
        const { message } = await AuthorizationAPI.resetPasswordWithToken({
          newPassword: state.password,
          token: query.token as string,
        });
        push(message, { variant: 'success' });
      }
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const isDisabled = !state.confirmPassword.trim() || !state.password.trim();

  return (
    <ChangePasswordMain>
      <ChangePasswordTitle>{t('Change your password.')}</ChangePasswordTitle>
      <Input
        type="password"
        label={t('New Password') as string}
        placeholder={t('Please Enter your New Password') as string}
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
      />
      <Input
        type="password"
        label={t('Confirm Password') as string}
        placeholder={t('Please Confirm your New Password') as string}
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
        {t('Change Password')}
      </Button>
      <ChangePasswordLocalization />
    </ChangePasswordMain>
  );
};

export default ChangePassword;
