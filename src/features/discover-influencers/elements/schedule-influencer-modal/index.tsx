import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TScheduleInfluencerModalProps } from 'features/discover-influencers/elements/schedule-influencer-modal/types';
import { ScheduleInfluencerModalMain } from 'features/discover-influencers/elements/schedule-influencer-modal/styles';
import { Button, Input } from 'components/ui';

const ScheduleInfluencerModal = ({
  onClose,
  ...props
}: TScheduleInfluencerModalProps) => {
  const [state, setState] = useState({
    title: '',
    type: null,
    date: null,
    influencer: null,
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
      <ScheduleInfluencerModalMain>
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
          label="Influencer"
          placeholder="Please Select"
          value={state.influencer}
          onValue={(influencer) => setState({ ...state, influencer })}
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
      </ScheduleInfluencerModalMain>
    </Modal>
  );
};

export default ScheduleInfluencerModal;
