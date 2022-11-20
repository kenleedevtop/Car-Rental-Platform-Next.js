import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddSmlModalProps } from 'features/sml/elements/create-sml-modal/types';
import { AddSmlModalMain } from 'features/sml/elements/create-sml-modal/styles';
import { Button, Input, Switch } from 'components/ui';
import { GridCell } from 'components/system';

const AddSmlModal = ({ onClose, ...props }: TAddSmlModalProps) => {
  const [state, setState] = useState({
    client: null,
    language: null,
    platform: null,
    diseaseArea: null,
    dateRange: null,
    symptom: null,
    additional: '',
  });

  return (
    <Modal
      size="medium"
      title="Create SML Report"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddSmlModalMain columns={2}>
        <Input
          type="select"
          label="Client"
          placeholder="Please Select"
          value={state.client}
          onValue={(client) => setState({ ...state, client })}
        />
        <Input
          type="select"
          label="Language"
          placeholder="Please Select"
          value={state.language}
          onValue={(language) => setState({ ...state, language })}
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
        />
        <Input
          type="select"
          label="Date Range"
          placeholder="Please Select"
          value={state.dateRange}
          onValue={(dateRange) => setState({ ...state, dateRange })}
        />
        <Input
          type="select"
          label="Symptom"
          placeholder="Please Select"
          value={state.symptom}
          onValue={(symptom) => setState({ ...state, symptom })}
        />
        <Switch label="Patients" />
        <Switch label="Caregivers" />
        <Switch label="Doctors" />
        <Switch label="Nurses" />
        <GridCell columnSpan={2}>
          <Input
            type="text"
            label="Additional Information"
            value={state.additional}
            onValue={(additional) => setState({ ...state, additional })}
            multiline
            rows={5}
          />
        </GridCell>
      </AddSmlModalMain>
    </Modal>
  );
};

export default AddSmlModal;
