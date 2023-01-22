import React from 'react';
import { Modal } from 'components/custom';
import { TConfirmRegistrationModalProps } from 'features/register/elements/confirm-registration-modal/types';
import { ConfirmRegistrationMain } from 'features/register/elements/confirm-registration-modal/style';
import { Button } from 'components/ui';

const ConfirmRegistrationModal = ({
  onClose,
  ...props
}: TConfirmRegistrationModalProps) => (
  <Modal size="small" onClose={onClose} {...props}>
    <ConfirmRegistrationMain>
      <p>
        Thank you for registration. <br /> Please confirm it by clicking the
        link sent to your email.
      </p>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={onClose}
      >
        Close
      </Button>
    </ConfirmRegistrationMain>
  </Modal>
);

export default ConfirmRegistrationModal;
