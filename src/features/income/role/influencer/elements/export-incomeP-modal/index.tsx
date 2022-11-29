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
        <Checkbox
          color="secondary"
          label="User Name"
          size="large"
          value={state.userName}
          onValue={(userName) => setState({ ...state, userName })}
        />
        <Checkbox
          color="secondary"
          label="Platform"
          size="large"
          value={state.platform}
          onValue={(platform) => setState({ ...state, platform })}
        />
        <Checkbox
          color="secondary"
          label="Registration Date"
          size="large"
          value={state.regDate}
          onValue={(regDate) => setState({ ...state, regDate })}
        />
        <Checkbox
          color="secondary"
          label="Lifetime Value"
          size="large"
          value={state.lifetimeValue}
          onValue={(lifetimeValue) => setState({ ...state, lifetimeValue })}
        />
      </ExportIncomeModalMain>
    </Modal>
  );
};

export default ExportIncomeModal;
