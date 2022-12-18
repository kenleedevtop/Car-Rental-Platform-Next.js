import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportClientsModalProps } from 'features/discover-clients/role/admin/elements/export-clients-modal/types';
import { ExportClientsModalMain } from 'features/discover-clients/role/admin/elements/export-clients-modal/styles';
import { Button, Checkbox, RadioButton } from 'components/ui';

const ExportClientsModal = ({
  onClose,
  ...props
}: TExportClientsModalProps) => {
  const [state, setState] = useState({
    identified: false,
    registered: false,
    contacted: false,
    callScheduled: false,
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
      <ExportClientsModalMain columns={2}>
        <RadioButton
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
          label="Identified"
          size="large"
          value={state.identified}
          onValue={(identified) => setState({ ...state, identified })}
        />
        <Checkbox
          color="secondary"
          label="Registered"
          size="large"
          value={state.registered}
          onValue={(registered) => setState({ ...state, registered })}
        />
        <Checkbox
          color="secondary"
          label="Contacted"
          size="large"
          value={state.contacted}
          onValue={(contacted) => setState({ ...state, contacted })}
        />
        <Checkbox
          color="secondary"
          label="Call Scheduled"
          size="large"
          value={state.callScheduled}
          onValue={(callScheduled) => setState({ ...state, callScheduled })}
        />
      </ExportClientsModalMain>
    </Modal>
  );
};

export default ExportClientsModal;
