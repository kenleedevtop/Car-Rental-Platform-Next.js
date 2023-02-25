import React, { useState, useEffect } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TContactInfluencerModalProps } from 'features/discover-influencers/role/admin/elements/contact-influencer-modal/types';
import { ContactInfluencerModalMain } from 'features/discover-influencers/role/admin/elements/contact-influencer-modal/styles';
import { Button, Input } from 'components/ui';

const ContactInfluencerModal = ({
  onClose,
  ...props
}: TContactInfluencerModalProps) => {
  const [state, setState] = useState({
    subject: '',
    recipient: [],
    emailType: 'template',
    message: '',
  });

  const [tabs, setTabs] = useState(0);

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
      <ContactInfluencerModalMain style={{ height: '550px' }}>
        <Tabs
          tabs={['Email', 'Direct Message']}
          value={tabs}
          onValue={setTabs}
        />
        {tabs === 0 && (
          <>
            <Input
              type="text"
              label="Subject"
              placeholder="Write Subject"
              value={state.subject}
              onValue={(subject) => setState({ ...state, subject })}
            />
            <Input
              type="multiselect"
              label="Recipient"
              placeholder="Select Recipient"
              value={state.recipient}
              onValue={(recipient) => setState({ ...state, recipient })}
            />

            <Input
              type="select"
              label="Email type"
              placeholder="Select Email type"
              value={state.emailType}
              onValue={(emailType) =>
                setState({ ...state, emailType: emailType.value })
              }
              options={[
                {
                  value: 'template',
                  label: 'Template',
                },
                {
                  value: 'custom',
                  label: 'Custom',
                },
              ]}
            />
            {state.emailType === 'custom' && (
              <Input
                multiline
                rows={5}
                type="text"
                label="Message"
                placeholder="Your Message"
                value={state.message}
                onValue={(message) => setState({ ...state, message })}
              />
            )}
          </>
        )}
        {tabs === 1 && (
          <>
            <Input
              type="multiselect"
              label="Recipient"
              placeholder="Select Recipient"
              value={state.recipient}
              onValue={(recipient) => setState({ ...state, recipient })}
            />
            <Input
              multiline
              rows={8}
              type="text"
              label="Message"
              placeholder="Your Message"
              value={state.message}
              onValue={(message) => setState({ ...state, message })}
            />
          </>
        )}
      </ContactInfluencerModalMain>
    </Modal>
  );
};

export default ContactInfluencerModal;
