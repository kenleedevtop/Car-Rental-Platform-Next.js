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
              title="How Does Co-Ownership Work on Supercar Sharing?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `Co-ownership with SupercarStake is both secure and exhilarating. When you purchase a share of a luxury supercar, you're actually becoming a shareholder in a Limited Liability Company (LLC). This LLC holds the title to the supercar, making your investment both legally recognized and secure.`,
                `Each supercar in our primary market is divided into 10 shares, with a single share entitling you to 30 days of exhilarating drives per year. Our user-friendly booking tool simplifies the scheduling process, ensuring you can get behind the wheel when you desire.`,
                `With SupercarStake, you enjoy the thrill of driving a luxury supercar while having the peace of mind that comes with a secure, legally registered form of ownership.`,
              ]}
            />
            <HelpCollapse
              title="How Do I List My Preferences for a Vacation Home?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `After you've logged in, head over to your 'Account' page and select the 'Preferences' tab. There you’ll find a form that allows you to specify various factors such as make, model, year, and even color preferences. Whether you're dreaming of a red Ferrari or a sleek black Lamborghini, this form helps tailor your supercar search. Your preferences guide us in curating new listings and ensuring that the supercars you see match your ultimate driving fantasies.`,
              ]}
            />
            <HelpCollapse
              title="How Does the Booking Tool Work for Shareholders?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `Our booking tool is designed to provide all shareholders with a fair and enjoyable experience. Here's a breakdown of the rules:`,
                `Reservation Window: You can reserve days up until the end of the current calendar year, preventing any single shareholder from monopolizing the most sought-after dates.`,
                `Peak Season Limitations: If your shared supercar has high demand during peak season, you can reserve up to 10 days per peak season, per share. This limitation is removed one month in advance, then it’s first-come, first-serve.`,
                `Weekend Limitations: Each share allows you to reserve up to 10 weekend days in a year.`,
                `Last-Minute Bookings: If a date is less than 30 days away and not already booked, you can grab it on a first-come, first-serve basis, even if it exceeds the peak season or weekend limitations.`,
                `Cancellations: A minimum of 45 days' notice is required for cancellations. Your share’s available days will be readjusted, and the days will become available for other shareholders.`,
                `By following these rules, we strive to provide a fair and enjoyable reservation experience for all shareholders.`,
              ]}
            />
            <HelpCollapse
              title="What is the Difference Between the Primary and Secondary Market?"
              openIcon={<ArrowDownIcon />}
              closeIcon={<ArrowUpIcon />}
              text={[
                `The Primary Market is your entryway to breathtaking co-ownership opportunities in luxury supercars. Supercars are carefully chosen based on the preferences of our discerning community. You can indicate your interest by applying for specific shares, each one granting you 30 days of unparalleled driving experiences per year. Once all shares are secured, and deposits made, the supercar is immediately prepared for shareholder use.`,
                `The Secondary Market, on the other hand, is the place for existing shareholders to sell or trade their shares. If your interests evolve, simply arrange a consultation with our specialized team, who will help you price your share attractively and list it for new potential co-owners to consider.`,
                `Both markets offer you maximum flexibility and financial acumen, epitomizing what SupercarStake stands for: The exhilaration of luxury supercar ownership made effortlessly attainable.`,
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
                    link="https://calendly.com/jurisicholdings/30min"
                    title="Talk with our founder"
                    text={['Schedule a call!']}
                  />
                  <IconWithText
                    icon={<EnvelopeIcon />}
                    link="mailto:info@supercarstake.com"
                    title="Write to our founder"
                    text={['Send an email!']}
                  />
                  <IconWithText
                    icon={<LocationIcon />}
                    title="Visit Us"
                    text={['Riehenring 65, 4058 Basel Switzerland']}
                    link="https://goo.gl/maps/mfx6WjDTo7ABJwg59"
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
