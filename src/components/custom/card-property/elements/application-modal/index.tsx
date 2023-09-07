import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { AddProjectModalMain } from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import { TApplyModalProps } from 'features/finance/elements/export-finance-modal/types';
import { ApplicationAPI } from 'api';
import { useSnackbar } from 'hooks';
import { AxiosError } from 'axios';
import { useAppContext } from 'context';

const ApplicationModal = ({
  onClose,
  houseId,
  houseName,
  ...props
}: TApplyModalProps) => {
  const { user } = useAppContext();
  const [state, setState] = useState<any>({
    tier: {
      label: 'Basic',
      value: 'Basic',
    },
    balance: 1,
  });
  const { push } = useSnackbar();

  const handleApply = async () => {
    if (state.tier) {
      try {
        await ApplicationAPI.apply({
          tier: state.tier.value,
          houseId,
          houseName,
        }).then(async (data) => {
          push('Applied succesfully.', { variant: 'success' });
          onClose();
        });
      } catch (e: any) {
        if (e instanceof AxiosError && e.response) {
          push(`Apply Failed!. ${e.response.data.message}`, {
            variant: 'error',
          });
        }
      }
    }
  };

  const handleChangeTier = (tier: any) => {
    switch (tier.value) {
      case 'Basic':
        setState((data: any) => ({
          ...data,
          tier,
          balance: 1,
        }));
        break;
      case 'Priority':
        setState((data: any) => ({
          ...data,
          tier,
          balance: 5,
        }));
        break;
      case 'Premium':
        setState((data: any) => ({
          ...data,
          tier,
          balance: 10,
        }));
        break;
      case 'Elite':
        setState((data: any) => ({
          ...data,
          tier,
          balance: 15,
        }));
        break;

      default:
        break;
    }
  };

  return (
    <Modal
      size="medium"
      title="Application"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={state.tier === null}
          onClick={handleApply}
        >
          Apply
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain columns={2}>
        <Input
          type="text"
          label="Balance"
          value={`Current Balance: ${user.tokenBalance}, Application Cost: ${
            state.balance ? state.balance : 0
          }`}
          onValue={() => {}}
          placeholder="Please Enter"
        />
        <Input
          type="select"
          label="Application Type"
          value={state.tier}
          options={[
            {
              value: 'Basic',
              label: 'Basic Application',
            },
            {
              value: 'Priority',
              label: 'Priority Application',
            },
            {
              value: 'Premium',
              label: 'Premium Application',
            },
            {
              value: 'Elite',
              label: 'Elite Application',
            },
          ]}
          onValue={(tier) => handleChangeTier(tier)}
          placeholder="Please Select"
        />
      </AddProjectModalMain>
    </Modal>
  );
};

export default ApplicationModal;
