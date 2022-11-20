import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TCreateSmlTabsModalProps } from 'features/sml/elements/create-sml-tabs-modal/types';
import { CreateSmlTabsModalMain } from 'features/sml/elements/create-sml-tabs-modal/styles';
import { Button, Input, Switch } from 'components/ui';
import { GridCell, Stack } from 'components/system';

const CreateSmlTabsModal = ({
  onClose,
  ...props
}: TCreateSmlTabsModalProps) => {
  const [state, setState] = useState({
    diseaseArea: null,
    language: null,
    platform: null,
    dateRange: null,
    company: null,
    symptom: null,
    additional: '',

    comments: [],
    labels: [],
    meetings: [],
    reminders: [],
    tasks: [],
    created: null,
    timesSold: null,
    lastSold: null,
  });

  const [tab, setTab] = useState(0);

  return (
    <Modal
      size="medium"
      title={tab === 0 ? 'Create SML Report' : 'First Name Last Name'}
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          {tab === 0 ? 'Create' : 'Close'}
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <Tabs tabs={['Info', 'Management']} value={tab} onValue={setTab} />
        {tab === 0 && (
          <CreateSmlTabsModalMain columns={2}>
            <Input
              type="text"
              label="Disease Area"
              placeholder="Please Select"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
            <Input
              type="select"
              label="Language"
              placeholder="Please Select"
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
            />
            <Input
              type="text"
              label="Platform"
              placeholder="Please Select"
              value={state.platform}
              onValue={(platform) => setState({ ...state, platform })}
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
              label="Company"
              placeholder="Please Select"
              value={state.company}
              onValue={(company) => setState({ ...state, company })}
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
                multiline
                rows={5}
                type="text"
                label="Additional Information"
                value={state.additional}
                onValue={(additional) => setState({ ...state, additional })}
              />
            </GridCell>
          </CreateSmlTabsModalMain>
        )}
        {tab === 1 && (
          <CreateSmlTabsModalMain columns={2}>
            <Input
              type="text"
              label="Comments"
              value={state.comments}
              onValue={(comments) => setState({ ...state, comments })}
            />
            <Input
              type="multiselect"
              label="Labels"
              value={state.labels}
              onValue={(labels) => setState({ ...state, labels })}
            />
            <Input
              type="text"
              label="Meetings"
              value={state.meetings}
              onValue={(meetings) => setState({ ...state, meetings })}
            />
            <Input
              type="text"
              label="Reminders"
              value={state.reminders}
              onValue={(reminders) => setState({ ...state, reminders })}
            />
            <Input
              type="text"
              label="Tasks"
              value={state.tasks}
              onValue={(tasks) => setState({ ...state, tasks })}
            />
            <Input
              type="date"
              label="Created"
              value={state.created}
              onValue={(created) => setState({ ...state, created })}
            />
            <Input
              type="text"
              label="Times Sold"
              value={state.timesSold}
              onValue={(timesSold) => setState({ ...state, timesSold })}
            />
            <Input
              type="date"
              label="Last Sold"
              value={state.lastSold}
              onValue={(lastSold) => setState({ ...state, lastSold })}
            />
          </CreateSmlTabsModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default CreateSmlTabsModal;
