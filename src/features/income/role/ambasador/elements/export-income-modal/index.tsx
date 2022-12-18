import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportIncomeModalProps } from 'features/income/role/ambasador/elements/export-income-modal/types';
import { ExportIncomeModalMain } from 'features/income/role/ambasador/elements/export-income-modal/styles';
import { Button, Checkbox, RadioButton } from 'components/ui';

const ExportIncomeModal = ({ onClose, ...props }: TExportIncomeModalProps) => {
  const [state, setState] = useState({
    statement: false,
    type: false,
    date: false,
    amount: false,
  });

  const [radioState, setRadioState] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(e.target.value);
  };

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
        <RadioButton
          color="secondary"
          checked={radioState === 'all'}
          onChange={handleChange}
          value="all"
          label="All"
        />
        <RadioButton
          checked={radioState === 'selected'}
          onChange={handleChange}
          value="selected"
          label="Selected"
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
