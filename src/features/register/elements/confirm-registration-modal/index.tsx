import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TConfirmRegistrationModalProps } from 'features/register/elements/confirm-registration-modal/types';
import {
  SConfirmRegistrationModalMain,
  SConfirmRegistrationModalTitle,
  SConfirmRegistrationModalText,
  SConfirmRegistrationModalActions,
  SConfirmRegistrationModalLink,
} from 'features/register/elements/confirm-registration-modal/styles';
import { Button } from 'components/ui';
import { useTranslation } from 'react-i18next';
import { AuthorizationAPI } from 'api';
import { TResendEmailConfirmation } from 'api/authorization/types';
import { useSnackbar } from 'hooks';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const ConfirmRegistrationModal = ({
  onClose,
  email,
  ...props
}: TConfirmRegistrationModalProps) => {
  const { t } = useTranslation('register');

  const [clicked, setClicked] = useState(false);
  const { push } = useSnackbar();
  const { locale } = useRouter();
  const [limiteReached, setLimiteReached] = useState(false);

  const resendVerification = async (body: TResendEmailConfirmation) => {
    setClicked(true);
    try {
      let lang = '';
      if (locale) {
        lang = locale.slice(0, 2);
      }
      await AuthorizationAPI.resendEmailConfirmation(body, lang);
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        if (e.response.data.message === 'limitedVerificationCode') {
          setClicked(false);
          setLimiteReached(true);
        }
      }
    }
  };

  const resentMessage = (
    <p>
      {t(
        "A confirmation email has been resent to the email address you provided. If you still don't receive it within a few minutes, please reach out to us at support@supercarstake.com and we'll assist you as soon as possible."
      )}
    </p>
  );
  const limitReachedMessage = (
    <p>
      {t(
        "We've reached the limit for sending email confirmation links to your inbox. If you haven't received our message, please check your SPAM folder. If the issue persists, please reach out to us at support@supercarstake.com and we'll assist you as soon as possible."
      )}
    </p>
  );
  const initialMessage = (
    <p>
      {t(
        "We've sent a confirmation link to your email address. Please click on the link to complete your registration. If the email is not in your inbox, kindly check your spam folder. If you still can't find it, we'd be happy to"
      )}
      <SConfirmRegistrationModalLink
        onClick={(e) => {
          e.preventDefault();
          resendVerification({ email });
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
          {t('Please Confirm Your Email')}
        </SConfirmRegistrationModalTitle>
        <SConfirmRegistrationModalText>
        {clicked
            ? resentMessage
            : limiteReached
            ? limitReachedMessage
            : initialMessage}
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
