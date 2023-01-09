import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TNoteClientsModalProps } from 'features/discover-clients/role/admin/elements/note-clients-modal/types';
import { NoteClientsModalMain } from 'features/discover-clients/role/admin/elements/note-clients-modal/styles';
import { DTabs } from 'features/discover-clients/role/admin/elements/note-clients-modal/data';
import { Button, Input } from 'components/ui';
import { InputLabel } from 'components/ui/input/styles';

const NoteClientsModal = ({ onClose, ...props }: TNoteClientsModalProps) => {
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
      <NoteClientsModalMain style={{ height: '450px' }}>
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
      </NoteClientsModalMain>
    </Modal>
  );
};

export default NoteClientsModal;
