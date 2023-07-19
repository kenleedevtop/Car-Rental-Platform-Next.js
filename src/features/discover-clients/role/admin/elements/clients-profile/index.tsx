import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TClientsProfileModalProps } from 'features/discover-clients/role/admin/elements/clients-profile/types';
import {
  ClientsProfileModalMain,
  ClientTitle,
} from 'features/discover-clients/role/admin/elements/clients-profile/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { EditIcon } from 'components/svg';

const ClientsProfile = ({ onClose, ...props }: TClientsProfileModalProps) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    product: '',
    industry: null,
    diseaseArea: null,
    location: null,
    market: null,

    comments: [],
    labels: [],
    meetings: [],
    reminders: [],
    tasks: [],
    onPlatformSince: null,
    status: '',
    statusChange: null,
  });

  const [tab, setTab] = useState(0);

  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  const [commentLabel, setCommentLabel] = useState<any>([]);
  const [labelLabel, setLabelLabel] = useState<any>([]);
  const [meetingLabel, setMeetingLabel] = useState<any>([]);
  const [reminderLabel, setReminderLabel] = useState<any>([]);
  const [taskLabel, setTaskLabel] = useState<any>([]);

  const handleCommentLabel = (v: any) => {
    setCommentLabel(v);
  };
  const handleLabelLabel = (v: any) => {
    setLabelLabel(v);
  };
  const handleMeetingLabel = (v: any) => {
    setMeetingLabel(v);
  };
  const handleReminderLabel = (v: any) => {
    setReminderLabel(v);
  };
  const handleTaskLabel = (v: any) => {
    setTaskLabel(v);
  };

  const [commentOptions, setCommentOptions] = useState([
    {
      label: 'Label',
      value: 'label',
    },
  ]);
  const [labelOptions, setLabelOptions] = useState([
    {
      label: 'Label',
      value: 'label',
    },
  ]);
  const [meetingOptions, setMeetingOptions] = useState([
    {
      label: 'Label',
      value: 'label',
    },
  ]);
  const [reminderOptions, setReminderOptions] = useState([
    {
      label: 'Label',
      value: 'label',
    },
  ]);
  const [taskOptions, setTaskOptions] = useState([
    {
      label: 'Label',
      value: 'label',
    },
  ]);

  const handleNewCommentTag = (v: any) => {
    setCommentOptions((x) => [...x, v]);
    setCommentLabel((x: any) => [...x, v]);
  };
  const handleNewLabelTag = (v: any) => {
    setLabelOptions((x) => [...x, v]);
    setLabelLabel((x: any) => [...x, v]);
  };
  const handleNewMeetingTag = (v: any) => {
    setMeetingOptions((x) => [...x, v]);
    setMeetingLabel((x: any) => [...x, v]);
  };
  const handleNewReminderTag = (v: any) => {
    setReminderOptions((x) => [...x, v]);
    setReminderLabel((x: any) => [...x, v]);
  };
  const handleNewTaskTag = (v: any) => {
    setTaskOptions((x) => [...x, v]);
    setTaskLabel((x: any) => [...x, v]);
  };

  return (
    <Modal
      size="medium"
      title={
        <ClientTitle>
          First Name Last Name
          {state.firstName} {state.lastName}
          <EditIcon
            style={
              disabled
                ? { cursor: 'pointer', color: '#7E839F' }
                : { cursor: 'pointer', color: '#448DC9' }
            }
            onClick={handleDisabled}
          />
        </ClientTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          {disabled ? 'Close' : 'Edit'}
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '500px' }}>
        <Tabs tabs={['Info', 'Management']} value={tab} onValue={setTab} />
        {tab === 0 && (
          <ClientsProfileModalMain columns={2}>
            <Input
              type="text"
              label="Email"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.email}
              onValue={(email) => setState({ ...state, email })}
            />
            <Input
              type="text"
              label="Company"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.company}
              onValue={(company) => setState({ ...state, company })}
            />
            <Input
              type="text"
              label="Role"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.role}
              onValue={(role) => setState({ ...state, role })}
            />
            <Input
              type="text"
              label="Product"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
            />
            <Input
              type="select"
              label="Industry"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.industry}
              onValue={(industry) => setState({ ...state, industry })}
            />
            <Input
              type="select"
              label="Disease Area"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              isFilterActive
            />
            <Input
              type="select"
              label="Location"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              type="select"
              label="Market"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.market}
              onValue={(market) => setState({ ...state, market })}
            />
          </ClientsProfileModalMain>
        )}
        {tab === 1 && (
          <ClientsProfileModalMain columns={2}>
            <Input
              type="multiselect"
              label="Comments"
              disabled={disabled}
              placeholder="Please Enter"
              value={commentLabel}
              onValue={handleCommentLabel}
              onNewTag={handleNewCommentTag}
              options={commentOptions}
            />
            <Input
              type="multiselect"
              label="Labels"
              disabled={disabled}
              placeholder="Please Enter"
              value={labelLabel}
              onValue={handleLabelLabel}
              onNewTag={handleNewLabelTag}
              options={labelOptions}
            />
            <Input
              type="multiselect"
              label="Meetings"
              disabled={disabled}
              placeholder="Please Enter"
              value={meetingLabel}
              onValue={handleMeetingLabel}
              onNewTag={handleNewMeetingTag}
              options={meetingOptions}
            />
            <Input
              type="multiselect"
              label="Reminders"
              disabled={disabled}
              placeholder="Please Enter"
              value={reminderLabel}
              onValue={handleReminderLabel}
              onNewTag={handleNewReminderTag}
              options={reminderOptions}
            />
            <Input
              type="multiselect"
              label="Tasks"
              disabled={disabled}
              placeholder="Please Enter"
              value={taskLabel}
              onValue={handleTaskLabel}
              onNewTag={handleNewTaskTag}
              options={taskOptions}
            />
            <Input
              type="date"
              label="On Platform Since"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.onPlatformSince}
              onValue={(onPlatformSince) =>
                setState({ ...state, onPlatformSince })
              }
            />
            <Input
              type="text"
              label="Status"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.status}
              onValue={(status) => setState({ ...state, status })}
            />
            <Input
              type="date"
              label="Status Change"
              disabled={disabled}
              placeholder="Please Enter"
              value={state.statusChange}
              onValue={(statusChange) => setState({ ...state, statusChange })}
            />
          </ClientsProfileModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default ClientsProfile;
