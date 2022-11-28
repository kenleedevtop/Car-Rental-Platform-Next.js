import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportReportsModalProps } from 'features/reports/role/client/elements/export-reports-modal/types';
import { ExportReportsModalMain } from 'features/reports/role/client/elements/export-reports-modal/styles';
import { Button, Checkbox } from 'components/ui';

const ExportReportsModal = ({
  onClose,
  ...props
}: TExportReportsModalProps) => {
  const [state, setState] = useState({
    all: false,
    selected: false,
    withoutReport: false,
    toBeCreated: false,
    received: false,
    approved: false,
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
      <ExportReportsModalMain columns={2}>
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
          label="Without Report"
          size="large"
          value={state.withoutReport}
          onValue={(withoutReport) => setState({ ...state, withoutReport })}
        />
        <Checkbox
          color="secondary"
          label="To Be Created"
          size="large"
          value={state.toBeCreated}
          onValue={(toBeCreated) => setState({ ...state, toBeCreated })}
        />
        <Checkbox
          color="secondary"
          label="Received"
          size="large"
          value={state.received}
          onValue={(received) => setState({ ...state, received })}
        />
        <Checkbox
          color="secondary"
          label="Approved"
          size="large"
          value={state.approved}
          onValue={(approved) => setState({ ...state, approved })}
        />
      </ExportReportsModalMain>
    </Modal>
  );
};

export default ExportReportsModal;
