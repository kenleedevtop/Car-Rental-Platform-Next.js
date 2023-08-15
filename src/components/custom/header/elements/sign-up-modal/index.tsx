import React from 'react';
import { Modal } from 'components/custom';
import { TSignUpProps } from 'components/custom/header/elements/sign-up-modal/types';
import {
  SignUpMain,
  SignUpTitle,
  SignUpText,
  SignUpActions,
  SignUpAction,
} from 'components/custom/header/elements/sign-up-modal/styles';
import { Button } from 'components/ui';
import { useTranslation } from 'react-i18next';

const SignUpModal = ({ onClose, ...props }: TSignUpProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal size="medium" onClose={onClose} {...props}>
      <SignUpMain columns={1}>
        <SignUpTitle>{t('Sign up Now')}</SignUpTitle>
        <SignUpText>
          {t(
            'Build trust and authenticity by connecting with our vetted Patient Influencers. Within the healthcare industry, patient influencers have pre-established trust with their audiences.'
          )}
        </SignUpText>
        <SignUpActions direction="horizontal">
          <SignUpAction href="/register?as=developer">
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={onClose}
            >
              {t('I AM DEVELOPER')}
            </Button>
          </SignUpAction>
          <SignUpAction href="/register?as=investor">
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={onClose}
            >
              {t('I AM INVESTOR')}
            </Button>
          </SignUpAction>
        </SignUpActions>
      </SignUpMain>
    </Modal>
  );
};
export default SignUpModal;
