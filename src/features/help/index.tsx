import React, { useState } from 'react';

import {
  HelpPageMain,
  HelpPageContact,
  HelpPageContactContainer,
  HelpPageIconWithTextContainer,
} from 'features/help/styles';
import { Button, Input } from 'components/ui';
import { IconWithText, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EnvelopeIcon,
  LocationIcon,
  PhoneCallIcon,
} from 'components/svg';
import { HelpCollapse } from 'features/help/elements';
import { useSnackbar } from 'hooks';
import { UsersAPI } from 'api';

const HelpPage = () => {
  const [tab, setTab] = useState(0);

  const initialHelpFormData = {
    topic: null,
    subject: '',
    message: '',
  };

  const [helpFormData, setHelpFormData] = useState<any>(initialHelpFormData);

  const { push } = useSnackbar();

  const topicOptions = [
    { value: 0, label: 'Account and Verification' },
    { value: 1, label: 'Payments and Earnings' },
    { value: 2, label: 'Campaigns and Surveys' },
    { value: 3, label: 'Technical Support' },
    { value: 4, label: 'Privacy and Compliance' },
    { value: 5, label: 'Donations & Affiliate Program' },
    { value: 6, label: 'Benefits' },
    { value: 7, label: 'General Inquiry' },
  ];

  const isDisabled =
    !helpFormData.topic || !helpFormData.subject || !helpFormData.message;

  const sendSupportEmail = async () => {
    const { topic, subject, message } = helpFormData;

    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    try {
      if (topic && trimmedSubject.length && trimmedMessage.length) {
        const formBody = {
          subject: trimmedSubject,
          message: trimmedMessage,
          topic: topic.label,
        };
        await UsersAPI.contactAdmin(formBody);
        push('Sucess submitting form');

        setHelpFormData(initialHelpFormData);
      }
    } catch (error) {
      push('Error sending form', { variant: 'error' });
    }
  };

  return (
    <HelpPageMain>
      <Stack>
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Frequently Asked Questions', 'Contact us']}
        />
        {tab === 0 ? (
          <Stack>
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
            <HelpCollapse
              title="How do i get paid?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              ]}
            />
          </Stack>
        ) : (
          <HelpPageContact>
            <HelpPageContactContainer>
              <Stack>
                <h2>Write to us</h2>
                <Input
                  type="select"
                  label="Topic"
                  placeholder="Please Select"
                  value={helpFormData.topic}
                  onValue={(topic) =>
                    setHelpFormData({ ...helpFormData, topic })
                  }
                  options={topicOptions}
                />
                <Input
                  type="text"
                  label="Subject"
                  placeholder="Please Enter"
                  value={helpFormData.subject}
                  onValue={(subject) =>
                    setHelpFormData({ ...helpFormData, subject })
                  }
                />
                <Input
                  type="text"
                  label="Message"
                  placeholder="Please Enter"
                  value={helpFormData.message}
                  onValue={(message) =>
                    setHelpFormData({ ...helpFormData, message })
                  }
                  multiline
                />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={sendSupportEmail}
                  disabled={isDisabled}
                >
                  Send
                </Button>
              </Stack>
            </HelpPageContactContainer>
            <HelpPageContactContainer>
              <HelpPageIconWithTextContainer>
                <h2>Get in touch</h2>
                <Stack>
                  <IconWithText
                    icon={<PhoneCallIcon />}
                    link="https://calendly.com/patientsinfluence-influencer/15min"
                    title="Talk with our founder"
                    text={['Schedule a call!']}
                  />
                  <IconWithText
                    icon={<EnvelopeIcon />}
                    link="mailto:ivan@patientsinfluence.com"
                    title="Write to our founder"
                    text={['Send an email!']}
                  />
                  <IconWithText
                    icon={<LocationIcon />}
                    title="Visit Us"
                    text={['Riehenring 65, 4058 Basel Switzerland']}
                    link="https://goo.gl/maps/mbiouV7WZoXBwqJDA"
                  />
                </Stack>
              </HelpPageIconWithTextContainer>
            </HelpPageContactContainer>
          </HelpPageContact>
        )}
      </Stack>
    </HelpPageMain>
  );
};

export default HelpPage;
