import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddSmlModalProps } from 'features/sml/role/admin/elements/create-sml-modal/types';
import { AddSmlModalMain } from 'features/sml/role/admin/elements/create-sml-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { useModal } from 'hooks';
import { CreateSmlFinal } from 'features/sml/role/admin/elements';
import { GridCell } from 'components/system';

const AddSmlModal = ({ onClose, ...props }: TAddSmlModalProps) => {
  const [state, setState] = useState({
    client: null,
    subscription: null,
    platform: null,
    diseaseArea: null,
    aiAnalytics: null,
    currency: null,
    amount: '',
    additional: '',
  });

  const [csfModal, openCsfModal, closeCsfModal] = useModal(false);

  return (
    <Modal
      size="medium"
      title="Create SML Report"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            openCsfModal();
          }}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddSmlModalMain columns={2}>
        <Input
          type="text"
          label="Client"
          placeholder="Please Select"
          value={state.client}
          onValue={(client) => setState({ ...state, client })}
        />
        <Input
          type="select"
          label="Subscription"
          placeholder="Please Select"
          value={state.subscription}
          onValue={(subscription) => setState({ ...state, subscription })}
        />

        <Input
          type="select"
          label="Platform"
          placeholder="Please Select"
          value={state.platform}
          onValue={(platform) => setState({ ...state, platform })}
        />
        <Input
          type="select"
          label="Disease Area"
          placeholder="Please Select"
          value={state.diseaseArea}
          onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
          isFilterActive
        />
        <Input
          type="select"
          label="AI Analytics"
          placeholder="Please Select"
          value={state.aiAnalytics}
          onValue={(aiAnalytics) => setState({ ...state, aiAnalytics })}
        />
        <InputGroup
          label="Budget"
          inputRatio="100px 1fr"
          elements={[
            {
              value: state.currency,
              onValue: (currency) => setState({ ...state, currency }),
              type: 'select',
              placeholder: 'CHF',
              options: [
                {
                  value: 'chf',
                  label: 'CHF',
                },
              ],
            },
            {
              value: state.amount,
              onValue: (amount) => setState({ ...state, amount }),
              type: 'text',
              placeholder: '18',
            },
          ]}
        />
        <GridCell columnSpan={2}>
          <Input
            multiline
            rows={5}
            type="text"
            label="Additional Information"
            value={state.additional}
            onValue={(additional) => setState({ ...state, additional })}
          />
        </GridCell>
      </AddSmlModalMain>
      {csfModal && <CreateSmlFinal onClose={closeCsfModal} />}
    </Modal>
  );
};

export default AddSmlModal;
