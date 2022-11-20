import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportSurveysModalProps } from 'features/surveys/elements/export-surveys-modal/types';
import { ExportSurveysModalMain } from 'features/surveys/elements/export-surveys-modal/styles';
import { Button, Checkbox } from 'components/ui';

const ExportSurveysModal = ({
  onClose,
  ...props
}: TExportSurveysModalProps) => {
  const [state, setState] = useState({
    all: false,
    selected: false,
    inPreparation: false,
    ongoing: false,
    finished: false,
    delivered: false,
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
      <ExportSurveysModalMain columns={2}>
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
          label="In Preparation"
          size="large"
          value={state.inPreparation}
          onValue={(inPreparation) => setState({ ...state, inPreparation })}
        />
        <Checkbox
          color="secondary"
          label="Ongoing"
          size="large"
          value={state.ongoing}
          onValue={(ongoing) => setState({ ...state, ongoing })}
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
      </ExportSurveysModalMain>
    </Modal>
  );
};

export default ExportSurveysModal;
