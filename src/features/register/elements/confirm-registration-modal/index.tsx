import React from 'react';
import { Modal } from 'components/custom';
import { TConfirmRegistrationModalProps } from 'features/register/elements/confirm-registration-modal/types';
import {
  SConfirmRegistrationModalMain,
  SConfirmRegistrationModalTitle,
  SConfirmRegistrationModalText,
  SConfirmRegistrationModalActions,
} from 'features/register/elements/confirm-registration-modal/styles';
import { Button } from 'components/ui';
import { useTranslation } from 'react-i18next';

const ConfirmRegistrationModal = ({
  onClose,
  ...props
}: TConfirmRegistrationModalProps) => {
  const { t } = useTranslation('register');

  return (
    <Modal size="medium" onClose={onClose} {...props}>
      <SConfirmRegistrationModalMain columns={1}>
        <SConfirmRegistrationModalTitle>
          {t('Please Confirm Your Email')}
        </SConfirmRegistrationModalTitle>
        <SConfirmRegistrationModalText>
          {t("We've sent a confirmation link to your email address.")}
          <br />
          {t('Please click on the link to complete your registration.')}
        </SConfirmRegistrationModalText>
        <SConfirmRegistrationModalActions direction="horizontal">
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
