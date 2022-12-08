import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportIncomeModalProps } from 'features/income/role/influencer/elements/export-incomeP-modal/types';
import { ExportIncomeModalMain } from 'features/income/role/influencer/elements/export-incomeP-modal/styles';
import { Button, Checkbox } from 'components/ui';

const ExportIncomeModal = ({ onClose, ...props }: TExportIncomeModalProps) => {
  const [state, setState] = useState({
    all: false,
    selected: false,
    userName: false,
    platform: false,
    regDate: false,
    lifetimeValue: false,
  });

  return (
    <Modal
      size="small"
      title="Do you want to export:"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Export
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <ExportIncomeModalMain columns={2}>
        <Checkbox
          color="secondary"
          label="All"
          size="large"
          value={state.all}
          onValue={(all) => setState({ ...state, all })}
        />
        <Checkbox
          color="secondary"
          label="Selected"
          size="large"
          value={state.selected}
          onValue={(selected) => setState({ ...state, selected })}
        />
      </ExportIncomeModalMain>
    </Modal>
  );
};

export default ExportIncomeModal;
