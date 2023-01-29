import React from 'react';
import { Modal } from 'components/custom';
import { TMaintenanceModalProps } from 'features/login/elements/maintenance-modal/types';
import { MaintenanceMain } from 'features/login/elements/maintenance-modal/style';
import { Button } from 'components/ui';

const ConfirmRegistrationModal = ({
  onClose,
  ...props
}: TMaintenanceModalProps) => (
  <Modal size="small" onClose={onClose} {...props}>
    <MaintenanceMain>
      <p>
        We are currently still working on our panels. <br />
        We will email you once we go live. <br />
        Thank you for your patience.
      </p>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={onClose}
      >
        Close
      </Button>
    </MaintenanceMain>
  </Modal>
);

export default ConfirmRegistrationModal;
