import React, { useState } from 'react';

import { HelpPageMain } from 'features/help/styles';
import { Button, Input } from 'components/ui';
import { IconWithText, Tabs } from 'components/custom';
import { Grid, GridCell, Stack } from 'components/system';
import { ArrowDownIcon, EnvelopeIcon, PhoneCallIcon } from 'components/svg';
import { HelpCollapse } from 'features/help/elements';

const HelpPage = () => {
  const [tab, setTab] = useState(0);

  const [filter, setFilter] = useState({
    topic: null,
    subject: '',
    message: '',
  });

  const [help, setHelp] = useState(false);

  const openHelp = () => {
    setHelp(!help);
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
              title="How do I get paid?"
              icon={<ArrowDownIcon />}
              text="When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <HelpCollapse
              title="How do I get paid?"
              icon={<ArrowDownIcon />}
              text="When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <HelpCollapse
              title="How do I get paid?"
              icon={<ArrowDownIcon />}
              text="When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <HelpCollapse
              title="How do I get paid?"
              icon={<ArrowDownIcon />}
              text="When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <HelpCollapse
              title="How do I get paid?"
              icon={<ArrowDownIcon />}
              text="When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </Stack>
        ) : (
          <Grid columns={4}>
            <GridCell columnSpan={2} style={{ paddingRight: '120px' }}>
              <Stack>
                <h2>Write to us</h2>
                <Input
                  type="select"
                  label="Topic"
                  placeholder="Select Topic"
                  value={filter.topic}
                  onValue={(topic) => setFilter({ ...filter, topic })}
                />
                <Input
                  type="text"
                  label="Subject"
                  placeholder="Subject"
                  value={filter.subject}
                  onValue={(subject) => setFilter({ ...filter, subject })}
                />
                <Input
                  type="text"
                  label="Message"
                  placeholder="St 6 Ft. Honey Park, NYC 100001"
                  value={filter.message}
                  onValue={(message) => setFilter({ ...filter, message })}
                  multiline
                />
                <Button color="primary" variant="contained">
                  Send
                </Button>
              </Stack>
            </GridCell>
            <GridCell
              columnSpan={2}
              style={{ borderLeft: '1px solid #E9F0FC', paddingLeft: '80px' }}
            >
              <Stack>
                <h2>Get in touch</h2>
                <IconWithText
                  style={{ marginTop: '50px' }}
                  icon={<PhoneCallIcon />}
                  title="Talk with our founder"
                  text={['Schedule a call!']}
                />
                <IconWithText
                  icon={<EnvelopeIcon />}
                  title="Write to our founder"
                  text={['Send an email!']}
                />
                <IconWithText
                  icon={<PhoneCallIcon />}
                  title="Visit Us"
                  text={['Riehenring 65, 4058 Basel Switzerland']}
                />
              </Stack>
            </GridCell>
          </Grid>
        )}
      </Stack>
    </HelpPageMain>
  );
};

export default HelpPage;
