import React, { useState } from 'react';
import { Loader, Modal } from 'components/custom';
import { TWelcomeModalProps } from 'features/login/elements/welcome-modal/types';
import {
  SWelcomeModalMain,
  SWelcomeModalTitle,
  SWelcomeModalText,
  SWelcomeModalInput,
} from 'features/login/elements/welcome-modal/styles';
import { Button } from 'components/ui';
import { useTranslation } from 'react-i18next';
import { AuthorizationAPI } from 'api';
import { useSnackbar } from 'hooks';

const WelcomeModal = ({
  role,
  error,
  onClose,
  ...props
}: TWelcomeModalProps) => {
  const { t } = useTranslation('login');

  const [email, setEmail] = useState('');

  const { push } = useSnackbar();

  const handleEmail = async () => {
    try {
      await AuthorizationAPI.resendVerificationEmail({ email });
      push('Verification token has been sent to your email!', {
        variant: 'success',
      });
      onClose();
    } catch {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  return error ? (
    <Modal size="medium" onClose={onClose} {...props}>
      <SWelcomeModalMain columns={1}>
        <SWelcomeModalTitle>{t('Activation Failed!')}</SWelcomeModalTitle>
        <SWelcomeModalText>
          {t(
            'Activation code is not valid. You can resend activation link to your email!'
          )}
        </SWelcomeModalText>
        <SWelcomeModalInput
          type="text"
          label="Email"
          placeholder="Please Enter your Email"
          value={email}
          onValue={setEmail}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleEmail}
          disabled={!email}
        >
          {t('RESEND')}
        </Button>
      </SWelcomeModalMain>
    </Modal>
  ) : (
    <Modal size="large" onClose={onClose} {...props}>
      <SWelcomeModalMain columns={1}>
        <SWelcomeModalTitle>
          {t(!role ? 'Please Wait' : 'Welcome to Patients Influence!')}
        </SWelcomeModalTitle>
        {role === 'INFLUENCER' && (
          <SWelcomeModalText>
            {t(
              "Congratulations on confirming your email and activating your account! You are now one step closer to earning additional income as a patient influencer. We are excited to have you on board and can't wait to see the positive impact you will make in the healthcare industry. Let's get started!"
            )}
          </SWelcomeModalText>
        )}
        {role === 'COMPANY' && (
          <SWelcomeModalText>
            {t(
              "Congratulations on confirming your email and activating your account! You are now one step closer to discovering the power of patient influencer marketing and how it can benefit your healthcare organization. We are excited to have you on board and look forward to working with you to make a difference in the industry. Let's get started!"
            )}
          </SWelcomeModalText>
        )}
        {!role && <Loader />}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={onClose}
          disabled={!role}
        >
          {t('CLOSE')}
        </Button>
      </SWelcomeModalMain>
    </Modal>
  );
};

export default WelcomeModal;
