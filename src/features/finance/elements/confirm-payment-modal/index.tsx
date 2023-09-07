import React from 'react';
import { Modal } from 'components/custom';

import { Button } from 'components/ui';
import { useTranslation } from 'react-i18next';
import { IConfirmPaymentModal } from './types';
import {
  SConfirmPaymentModalActions,
  SConfirmPaymentModalMain,
  SConfirmPaymentModalTitle,
} from './styles';

const ConfirmPaymentModal = ({
  onClose,
  message,
  ...props
}: IConfirmPaymentModal) => {
  const { t } = useTranslation('login');

  return (
    <Modal size="medium" onClose={onClose} {...props}>
      <SConfirmPaymentModalMain columns={1}>
        <SConfirmPaymentModalTitle>{message}</SConfirmPaymentModalTitle>
        <SConfirmPaymentModalActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={onClose}
          >
            {t('CLOSE')}
          </Button>
        </SConfirmPaymentModalActions>
      </SConfirmPaymentModalMain>
    </Modal>
  );
};
export default ConfirmPaymentModal;
