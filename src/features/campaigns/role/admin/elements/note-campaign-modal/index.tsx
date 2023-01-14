import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TNoteCampaignModalProps } from 'features/campaigns/role/admin/elements/note-campaign-modal/types';
import { NoteCampaignModalMain } from 'features/campaigns/role/admin/elements/note-campaign-modal/styles';
import { DTabs } from 'features/ambasadors/role/admin/elements/note-ambasadors-modal/data';
import { Button, Input } from 'components/ui';
import { InputLabel } from 'components/ui/input/styles';

const NoteAmbasadorsModal = ({
  onClose,
  ...props
}: TNoteCampaignModalProps) => {
  const [state, setState] = useState({
    subject: '',
    recipient: [],
    message: '',
    type: 0,
  });

  return (
    <Modal
      size="small"
      title="Note"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Send
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <NoteCampaignModalMain style={{ height: '450px' }}>
        <Tabs
          tabs={DTabs}
          value={state.type}
          onValue={(type) => setState({ ...state, type })}
        />
        {!state.type && (
          <>
            <Input
              type="text"
              label="Comment"
              multiline
              rows={3}
              placeholder="Write Comment"
              value={state.subject}
              onValue={(subject) => setState({ ...state, subject })}
            />
            <InputLabel>Previous Comments</InputLabel>
          </>
        )}

        {state.type && (
          <Input
            type="multiselect"
            label="Label"
            multiline
            rows={3}
            placeholder="Please Select"
            value={state.subject}
            onValue={(subject) => setState({ ...state, subject })}
          />
        )}
      </NoteCampaignModalMain>
    </Modal>
  );
};

export default NoteAmbasadorsModal;
