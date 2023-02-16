import React from 'react';
import { Modal } from 'components/custom';
import { TConfirmRemoveBenefitModalProps } from 'features/benefits/role/admin/elements/confirm-remove-benefit-modal/types';
import { ConfirmRemoveBenefitModalMain } from 'features/benefits/role/admin/elements/confirm-remove-benefit-modal/styles';
import { Button } from 'components/ui';

const ConfirmRemoveBenefitModal = ({
  onClose,
  ...props
}: TConfirmRemoveBenefitModalProps) => (
  <Modal
    size="small"
    title="Are you sure?"
    actions={[
      <Button
        color="default"
        variant="contained"
        size="large"
        onClick={onClose}
      >
        No
      </Button>,
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={onClose}
      >
        Yes
      </Button>,
    ]}
    onClose={onClose}
    {...props}
  >
    <ConfirmRemoveBenefitModalMain columns={1}>
      <p>
        Are you sure you want to remove the Benefit? <br />
        Operation cannot be undone.
      </p>
    </ConfirmRemoveBenefitModalMain>
  </Modal>
);

export default ConfirmRemoveBenefitModal;
