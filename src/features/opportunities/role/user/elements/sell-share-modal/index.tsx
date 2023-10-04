import React, { useState, Children, useEffect } from 'react';
import { CallendlyWidget, Modal } from 'components/custom';
import { TApplyModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  RTEContainer,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import { ApplicationAPI } from 'api';
import { useSnackbar } from 'hooks';
import { useAppContext } from 'context';
import ShareAPI from 'api/shares';
import { calculateLeftDays } from 'utilities/calendar';

const ExportFinanceModal = ({
  onClose,
  refresh,
  availableShares,
  carName,
  carId,
  ...props
}: TApplyModalProps) => {
  const [shares, setShares] = useState({ label: '', value: 0 });
  const { push } = useSnackbar();
  const { user } = useAppContext();
  const [totalShares, setTotalShares] = useState(0);

  const getShareWithCarId = async () => {
    try {
      if (carId) {
        const response = await ShareAPI.getShareByCarId(carId);
        if (response) {
          setTotalShares(response.count);
        }
      }
    } catch (error) {
      push('Something went wrong!', { variant: 'error' });
    }
  };

  const sellShares = async () => {
    if (shares.value) {
      onClose();
      push(`Successfully booked with the Admin to sell your shares.`, { variant: 'success' });
    }

  };

  useEffect(() => {
    if (carId)
      getShareWithCarId();
  }, [carId]);


  return (
    <Modal
      size="medium"
      title="Sell Shares?"
      actions={Children.toArray([
        <></>,
      ])}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain>
        <Input
          type="text"
          label="House"
          value={carName}
          onValue={() => { }}
          placeholder="Please Select"
        />
        <Input
          type="select"
          label="Shares"
          options={Array.from({ length: totalShares ? totalShares : 0 }, (_, i) => ({
            label: `${i + 1}`,
            value: `${i + 1}`,
          }))}
          value={shares}
          required
          onValue={(e) => {
            if (e) {
              setShares({ label: e.value, value: parseInt(e.value) });
            } else {
              setShares({ label: '', value: 0 });
            }
          }}
          placeholder="Please Select"
        />

        <RTEContainer>
          <CallendlyWidget onScheduled={sellShares} shareCount={shares.value} name={user.firstName + ' ' + user.lastName} email={user.email} />
        </RTEContainer>
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;
