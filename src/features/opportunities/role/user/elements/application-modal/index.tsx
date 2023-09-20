import React, { useState, Children } from 'react';
import { CallendlyWidget, Modal } from 'components/custom';
import { TApplyModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  RTEContainer,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import { ApplicationAPI } from 'api';
import { useMenu, useModal, useSnackbar } from 'hooks';

const ExportFinanceModal = ({
  onClose,
  refresh,
  carId,
  carName,
  ...props
}: TApplyModalProps) => {
  const [state, setState] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [shares, setShares] = useState({ label: '', value: 0 });
  const { push } = useSnackbar();
  const sendApplication = async () => {
    try {
      const data = {
        carId: carId,
        carName: carName,
        sharesCount: shares.value,
      };
      const car = await ApplicationAPI.apply(data);
      onClose();
      refresh();
      push('Successfully sent application.', { variant: 'success' });
    } catch {
      push('Something went wrong when create application.', {
        variant: 'error',
      });
    }
  };

  return (
    <Modal
      size="medium"
      title="Application"
      actions={Children.toArray([
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={sendApplication}
        >
          Apply
        </Button>,
      ])}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain>
        <Input
          type="select"
          label="Shares"
          options={Array.from({ length: props.availableShares }, (_, i) => ({
            label: `${i + 1}`,
            value: `${i + 1}`,
          }))}
          value={shares}
          onValue={(e) => {
            if (e) {
              setTotalPrice(e.value * props.sharePrice);
              setShares({ label: e.value, value: parseInt(e.value) });
            } else {
              setTotalPrice('');
              setShares({ label: '', value: 0 });
            }
          }}
          placeholder="Please Select"
        />
        <Input
          type="text"
          label="Total Price"
          value={totalPrice}
          onValue={() => {}}
          placeholder="Please Select"
        />
        <RTEContainer>
          <CallendlyWidget />
        </RTEContainer>
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;
