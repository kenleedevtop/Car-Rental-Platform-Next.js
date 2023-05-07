import React from 'react';
import { Modal } from 'components/custom';
import { TConfirmAddBenefitModalProps } from 'features/benefits/role/admin/elements/confirm-add-benefit-modal/types';
import { TConfirmAddBenefitModalMain } from 'features/benefits/role/admin/elements/confirm-add-benefit-modal/styles';
import { Button } from 'components/ui';
import { BenefitsAPI } from 'api';
import { useSnackbar } from 'hooks';

const ConfirmAddBenefitModal = ({
  value,
  onClose,
  ...props
}: TConfirmAddBenefitModalProps) => {
  const { push } = useSnackbar();

  const handleAddBenefit = async (someValue: any) => {
    try {
      await BenefitsAPI.addBenefit(someValue);
      push('Benefit successfully added.', { variant: 'success' });
    } catch {
      push("Benefit couldn't be added.", { variant: 'error' });
    }
  };

  return (
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
          onClick={() => {
            handleAddBenefit(value);
            onClose();
          }}
        >
          Yes
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <TConfirmAddBenefitModalMain columns={1}>
        <p>
          Are you sure you want to add Benefit? <br />
          Operation cannot be undone.
        </p>
      </TConfirmAddBenefitModalMain>
    </Modal>
  );
};

export default ConfirmAddBenefitModal;
