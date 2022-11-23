import React, { useState } from 'react';

import { HelpPageMain } from 'features/help/styles';
import { Button, Card, Input } from 'components/ui';
import { Tabs } from 'components/custom';
import { Stack } from 'components/system';

const HelpPage = () => {
  const [tab, setTab] = useState(0);

  const [filter, setFilter] = useState({
    topic: null,
    subject: '',
    message: '',
  });

  return (
    <HelpPageMain>
      <Card>
        <Stack>
          <Tabs
            value={tab}
            onValue={setTab}
            tabs={['Contact us', 'Frequently Asked Questions']}
          />
          <Stack direction="horizontal">
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
                type="select"
                label="Subject"
                placeholder="Subject"
                value={filter.subject}
                onValue={(subject) => setFilter({ ...filter, subject })}
              />
              <Input
                type="select"
                label="Message"
                placeholder="St 6 Ft. Honey Park, NYC 100001"
                value={filter.message}
                onValue={(message) => setFilter({ ...filter, message })}
              />
              <Button color="primary" variant="contained">
                Send
              </Button>
            </Stack>
            <Stack>
              <h2>Get in touch</h2>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </HelpPageMain>
  );
};

export default HelpPage;
