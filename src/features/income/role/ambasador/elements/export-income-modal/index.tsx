import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportIncomeModalProps } from 'features/income/role/ambasador/elements/export-income-modal/types';
import { ExportIncomeModalMain } from 'features/income/role/ambasador/elements/export-income-modal/styles';
import { Button, Checkbox } from 'components/ui';

const ExportIncomeModal = ({ onClose, ...props }: TExportIncomeModalProps) => {
  const [state, setState] = useState({
    all: false,
    selected: false,
    statement: false,
    type: false,
    date: false,
    amount: false,
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
          label="Statement"
          size="large"
          value={state.statement}
          onValue={(statement) => setState({ ...state, statement })}
        />
        <Checkbox
          color="secondary"
          label="Type"
          size="large"
          value={state.type}
          onValue={(type) => setState({ ...state, type })}
        />
        <Checkbox
          color="secondary"
          label="Date"
          size="large"
          value={state.date}
          onValue={(date) => setState({ ...state, date })}
        />
        <Checkbox
          color="secondary"
          label="Amount"
          size="large"
          value={state.amount}
          onValue={(amount) => setState({ ...state, amount })}
        />
      </ExportIncomeModalMain>
    </Modal>
  );
};

export default ExportIncomeModal;
