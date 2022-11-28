import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportSmlModalProps } from 'features/sml/role/admin/elements/export-sml-modal/types';
import { ExportSmlModalMain } from 'features/sml/role/admin/elements/export-sml-modal/styles';
import { Button, Checkbox } from 'components/ui';

const ExportSmlModal = ({ onClose, ...props }: TExportSmlModalProps) => {
  const [state, setState] = useState({
    all: false,
    selected: false,
    tbc: false,
    finished: false,
    delivered: false,
    canceled: false,
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
      <ExportSmlModalMain columns={2}>
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
          label="To Be Created"
          size="large"
          value={state.tbc}
          onValue={(tbc) => setState({ ...state, tbc })}
        />
        <Checkbox
          color="secondary"
          label="Finished"
          size="large"
          value={state.finished}
          onValue={(finished) => setState({ ...state, finished })}
        />
        <Checkbox
          color="secondary"
          label="Delivered"
          size="large"
          value={state.delivered}
          onValue={(delivered) => setState({ ...state, delivered })}
        />
        <Checkbox
          color="secondary"
          label="Canceled"
          size="large"
          value={state.canceled}
          onValue={(canceled) => setState({ ...state, canceled })}
        />
      </ExportSmlModalMain>
    </Modal>
  );
};

export default ExportSmlModal;
