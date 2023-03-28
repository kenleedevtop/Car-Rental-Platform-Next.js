import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TContactClientsModalProps } from 'features/clients/role/admin/elements/contact-clients-modal/types';
import { ContactClientsModalMain } from 'features/clients/role/admin/elements/contact-clients-modal/styles';
import { Button, Input } from 'components/ui';

const ContactClientsModal = ({
  onClose,
  ...props
}: TContactClientsModalProps) => {
  const [state, setState] = useState({
    subject: '',
    recipient: [],
    message: '',
    type: 0,
  });

  return (
    <Modal
      size="small"
      title="Contact"
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
      <ContactClientsModalMain>
        <Input
          type="text"
          label="Subject"
          placeholder="Write Subject"
          value={state.subject}
          onValue={(subject) => setState({ ...state, subject })}
        />
        <Input
          multiline
          rows={state.type ? 7 : 5}
          type="text"
          label="Message"
          placeholder="Your Message"
          value={state.message}
          onValue={(message) => setState({ ...state, message })}
        />
      </ContactClientsModalMain>
    </Modal>
  );
};

export default ContactClientsModal;
