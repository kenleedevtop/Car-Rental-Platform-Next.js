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
  PhoneCallIcon,
} from 'components/svg';
import { HelpCollapse } from 'features/help/elements';
import UsersAPI from 'api/users';
import { useSnackbar } from 'hooks';

const HelpPage = () => {
  const [tab, setTab] = useState(0);

  // const initialHelpFormData = {
  //   topic: null,
  //   subject: '',
  //   message: '',
  // };

  // const [helpFormData, setHelpFormData] = useState<any>(initialHelpFormData);

  const { push } = useSnackbar();

  // const topicOptions = [
  //   { value: 0, label: 'Acquisition Strategy' },
  //   { value: 1, label: 'Commission Queries' },
  //   { value: 2, label: 'Payment Withdrawal' },
  //   { value: 3, label: 'Client Activity Tracking' },
  //   { value: 4, label: 'Account Management' },
  //   { value: 5, label: 'Ambassador Program' },
  //   { value: 6, label: 'Privacy & Compliance' },
  //   { value: 7, label: 'Technical Support' },
  // ];

  // const sendSupportEmail = async () => {
  //   const { topic, subject, message } = helpFormData;

  //   const trimmedSubject = subject.trim();
  //   const trimmedMessage = message.trim();
  //   try {
  //     if (topic && trimmedSubject.length && trimmedMessage.length) {
  //       const formBody = {
  //         subject: trimmedSubject,
  //         message: trimmedMessage,
  //         topic: topic.label,
  //       };
  //       await UsersAPI.contactAdmin(formBody);
  //       push('Sucess submitting form');

  //       setHelpFormData(initialHelpFormData);
  //     }
  //   } catch (error) {
  //     push('Error sending form', { variant: 'error' });
  //   }
  // };

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
                  placeholder="Select Topic"
                  value=""
                  onValue={() => {}}
                  // value={helpFormData.topic}
                  // onValue={(topic) =>
                  // setHelpFormData({ ...helpFormData, topic })
                  // }
                  // options={topicOptions}
                />
                <Input
                  type="text"
                  label="Subject"
                  placeholder="Subject"
                  value=""
                  onValue={() => {}}
                  // value={helpFormData.subject}
                  // onValue={(subject) =>
                  //   setHelpFormData({ ...helpFormData, subject })
                  // }
                />
                <Input
                  type="text"
                  label="Message"
                  placeholder="Please enter a message"
                  value=""
                  onValue={() => {}}
                  // value={helpFormData.message}
                  // onValue={(message) =>
                  //   setHelpFormData({ ...helpFormData, message })
                  // }
                  multiline
                />
                <Button
                  color="primary"
                  variant="contained"
                  // onClick={sendSupportEmail}
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
                    // link="https://calendly.com/patientsinfluence-client/30min"
                    title="Talk with our founder"
                    text={['Schedule a call!']}
                  />
                  <IconWithText
                    icon={<EnvelopeIcon />}
                    // link="mailto:client@patientsinfluence.com"
                    title="Write to our founder"
                    text={['Send an email!']}
                  />
                  <IconWithText
                    icon={<PhoneCallIcon />}
                    title="Visit Us"
                    text={['Riehenring 65, 4058 Basel Switzerland']}
                    // link="https://goo.gl/maps/mbiouV7WZoXBwqJDA"
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
