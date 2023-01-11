import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TScheduleAmbasadorsModalProps } from 'features/ambasadors/role/admin/elements/schedule-ambasadors-modal/types';
import { ScheduleAmbasadorsModalMain } from 'features/ambasadors/role/admin/elements/schedule-ambasadors-modal/styles';
import { Button, Input } from 'components/ui';

const ScheduleAmbasadorsModal = ({
  onClose,
  ...props
}: TScheduleAmbasadorsModalProps) => {
  const [state, setState] = useState({
    title: '',
    type: null,
    date: null,
    client: null,
    description: '',
  });

  return (
    <Modal
      size="small"
      title="Schedule"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Schedule
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <ScheduleAmbasadorsModalMain>
        <Input
          type="text"
          label="Title"
          placeholder="Add Title"
          value={state.title}
          onValue={(title) => setState({ ...state, title })}
        />
        <Input
          type="select"
          label="Type"
          placeholder="Please Select"
          value={state.type}
          onValue={(type) => setState({ ...state, type })}
        />
        <Input
          type="date"
          label="Date & Time"
          placeholder="Please Select"
          value={state.date}
          onValue={(date) => setState({ ...state, date })}
        />
        <Input
          type="select"
          label="Client"
          placeholder="Please Select"
          value={state.client}
          onValue={(client) => setState({ ...state, client })}
        />
        <Input
          multiline
          rows={5}
          type="text"
          label="Description"
          placeholder="Add Description"
          value={state.description}
          onValue={(description) => setState({ ...state, description })}
        />
      </ScheduleAmbasadorsModalMain>
    </Modal>
  );
};

export default ScheduleAmbasadorsModal;
