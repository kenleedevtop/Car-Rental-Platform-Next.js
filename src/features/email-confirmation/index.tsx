import React, { useState, useEffect } from 'react';
import {
  EmailConfirmationMain,
  EmailConfirmationTitle,
  EmailButton,
} from 'features/email-confirmation/styles';
import { useSnackbar } from 'hooks';
import { InfluencerAPI, ClientAPI, AmbassadorAPI, AuthorizationAPI } from 'api';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const EmailConfirmation = () => {
  const { t } = useTranslation('email-confirmation');
  const { push } = useSnackbar();
  const [message, setMessage] = useState('');

  const { query } = useRouter();

  const handleChange = async () => {
    try {
      await AuthorizationAPI.emailConfirmation({ token: query.token as any });
      push('User has been confirmed successfully.', { variant: 'success' });
      setMessage('User has been confirmed successfully.');
    } catch (e: any) {
      push('User has not been confrimed. Please try again later.', {
        variant: 'error',
      });
      setMessage('User has not been confrimed. Please try again later.');
    }
  };

  useEffect(() => {
    console.log(query);

    if (query.token) {
      handleChange();
    }
  }, [query]);

  return (
    <EmailConfirmationMain>
      <EmailConfirmationTitle>{message}</EmailConfirmationTitle>
      <EmailButton href="/login">Go back</EmailButton>
    </EmailConfirmationMain>
  );
};

export default EmailConfirmation;
