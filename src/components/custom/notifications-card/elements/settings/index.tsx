import { Modal } from 'components/custom';
import { Button, Input, Switch } from 'components/ui';
import React, { useState } from 'react';
import { TNotificationSettings } from 'components/custom/notifications-card/elements/settings/types';
import { NotificationSettingsMain } from 'components/custom/notifications-card/elements/settings/styles';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';

const NotificationSettings = ({ onClose, ...props }: TNotificationSettings) => {
  const [state, setState] = useState({
    meetingDays: '',
    meetingHours: '',
    taskDays: '',
    taskHours: '',
    reminderDays: '',
    reminderHours: '',
    unchangedDays: '',
    unchangedHours: '',
    identified: false,
    contacted: false,
    registered: false,
  });

  return (
    <Modal
      size="small"
      title="Notifications Settings"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Save
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <NotificationSettingsMain columns={2}>
        <GridCell columnSpan={2}>
          <InputLabel style={{ marginBottom: '10px' }}>
            Notify me before Meeting
          </InputLabel>
          <Stack direction="horizontal">
            <Input
              type="text"
              placeholder="Days"
              value={state.meetingDays}
              onValue={(meetingDays) => setState({ ...state, meetingDays })}
            />
            <Input
              type="text"
              placeholder="Hours"
              value={state.meetingHours}
              onValue={(meetingHours) => setState({ ...state, meetingHours })}
            />
          </Stack>
        </GridCell>
        <GridCell columnSpan={2}>
          <InputLabel style={{ marginBottom: '10px' }}>
            Notify me before Task
          </InputLabel>
          <Stack direction="horizontal">
            <Input
              type="text"
              placeholder="Days"
              value={state.taskDays}
              onValue={(taskDays) => setState({ ...state, taskDays })}
            />
            <Input
              type="text"
              placeholder="Hours"
              value={state.taskHours}
              onValue={(taskHours) => setState({ ...state, taskHours })}
            />
          </Stack>
        </GridCell>
        <GridCell columnSpan={2}>
          <InputLabel style={{ marginBottom: '10px' }}>
            Notify me before Reminder
          </InputLabel>
          <Stack direction="horizontal">
            <Input
              type="text"
              placeholder="Days"
              value={state.reminderDays}
              onValue={(reminderDays) => setState({ ...state, reminderDays })}
            />
            <Input
              type="text"
              placeholder="Hours"
              value={state.reminderHours}
              onValue={(reminderHours) => setState({ ...state, reminderHours })}
            />
          </Stack>
        </GridCell>
        <GridCell columnSpan={2}>
          <InputLabel style={{ marginBottom: '10px' }}>
            Notify me when Status Unchanged more than
          </InputLabel>
          <Stack direction="horizontal">
            <Input
              type="text"
              placeholder="Days"
              value={state.unchangedDays}
              onValue={(unchangedDays) => setState({ ...state, unchangedDays })}
            />
            <Input
              type="text"
              placeholder="Hours"
              value={state.unchangedHours}
              onValue={(unchangedHours) =>
                setState({ ...state, unchangedHours })
              }
            />
          </Stack>
        </GridCell>
        <GridCell columnSpan={2}>
          <InputLabel style={{ marginBottom: '10px' }}>
            Notify me when Status Change from
          </InputLabel>
          <Stack
            direction="horizontal"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Switch
              color="secondary"
              label="Identified"
              value={state.identified}
              onValue={(identified) => setState({ ...state, identified })}
            />
            <Switch
              color="secondary"
              label="Contacted"
              value={state.contacted}
              onValue={(contacted) => setState({ ...state, contacted })}
            />
            <Switch
              color="secondary"
              label="Registered"
              value={state.registered}
              onValue={(registered) => setState({ ...state, registered })}
            />
          </Stack>
        </GridCell>
      </NotificationSettingsMain>
    </Modal>
  );
};

export default NotificationSettings;
