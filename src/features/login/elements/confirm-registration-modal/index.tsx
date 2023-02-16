import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TConfirmRegistrationModalProps } from 'features/login/elements/confirm-registration-modal/types';
import {
  SConfirmRegistrationModalMain,
  SConfirmRegistrationModalTitle,
  SConfirmRegistrationModalText,
  SConfirmRegistrationModalActions,
  SConfirmRegistrationModalLink,
} from 'features/login/elements/confirm-registration-modal/styles';
import { Button } from 'components/ui';
import { useTranslation } from 'react-i18next';
import { AuthorizationAPI } from 'api';
import { TResendVerificationEmail } from 'api/authorization/types';
import { AxiosError } from 'axios';
import { useSnackbar } from 'hooks';
import { useRouter } from 'next/router';

const ConfirmRegistrationModal = ({
  onClose,
  email,
  attempt,
  incrementAttempt,
  ...props
}: TConfirmRegistrationModalProps) => {
  const { t } = useTranslation('login');
  const { locale } = useRouter();
  const { push } = useSnackbar();

  const [clicked, setClicked] = useState(false);

  const resendVerification = async (body: TResendVerificationEmail) => {
    try {
      await AuthorizationAPI.resendVerificationEmail(body, locale);
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        push(e.response.data.message, {
          variant: 'error',
        });
        setClicked(true);
      }
    }
  };

  // comment

  useEffect(() => {
    if (attempt > 1) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [attempt]);

  const resentMessage = (
    <p>
      {t(
        "A confirmation email has been resent to the email address you provided. If you still don't receive it within a few minutes, please reach out to us at support@patientsinfluence.com and we'll assist you as soon as possible."
      )}
    </p>
  );
  const initialMessage = (
    <p>
      {t(
        "Please confirm your email by clicking on the link sent to you. Only after confirmation, you will be able to log in to your account. If the email is not in your inbox, kindly check your spam folder. If you still can't find it, we'd be happy to"
      )}
      <SConfirmRegistrationModalLink
        onClick={(e) => {
          e.preventDefault();
          resendVerification({ email });
          incrementAttempt();
        }}
      >
        {t('resend the confirmation email to you.')}
      </SConfirmRegistrationModalLink>
    </p>
  );

  return (
    <Modal size="medium" onClose={onClose} {...props}>
      <SConfirmRegistrationModalMain columns={1}>
        <SConfirmRegistrationModalTitle>
          {t('Email Confirmation Required')}
        </SConfirmRegistrationModalTitle>
        <SConfirmRegistrationModalText>
          {clicked ? resentMessage : initialMessage}
        </SConfirmRegistrationModalText>
        <SConfirmRegistrationModalActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={onClose}
          >
            {t('CLOSE')}
          </Button>
        </SConfirmRegistrationModalActions>
      </SConfirmRegistrationModalMain>
    </Modal>
  );
};
export default ConfirmRegistrationModal;
