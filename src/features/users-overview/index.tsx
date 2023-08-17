import React from 'react';

import {
  ApplicationContainer,
  AccountHeadline,
  AccountGrid,
} from 'features/users-overview/styles';
import { Button, Input, Checkbox, Card } from 'components/ui';
import { Stack } from 'components/system';
import { AddIcon, DeleteIcon } from 'components/svg';

const OverviewPage = () => (
  <Card>
    <ApplicationContainer>
      <Stack>
        <AccountHeadline>Work Experience</AccountHeadline>
        <AccountGrid>
          <Input
            type="text"
            label="Job Title"
            value={null}
            onValue={() => {}}
          />
          <Input type="text" label="Company" value={null} onValue={() => {}} />
          <Input type="text" label="Location" value={null} onValue={() => {}} />
          <Stack direction="horizontal">
            <Input type="date" label="From" value={null} onValue={() => {}} />
            <Input type="date" label="To" value={null} onValue={() => {}} />
          </Stack>
          <Input
            type="text"
            label="Role Description"
            value={null}
            onValue={() => {}}
            multiline
            rows={3}
            style={{ gridColumn: '1/3' }}
          />
          <AccountGrid>
            <Checkbox label="I still work here." />
          </AccountGrid>
          <AccountGrid>
            <div style={{ display: 'flex', gap: '16px' }}>
              <AddIcon style={{ color: '#9F9FB0' }} />
              <DeleteIcon style={{ color: '#9F9FB0' }} />
            </div>
          </AccountGrid>
        </AccountGrid>
        <AccountHeadline>Education</AccountHeadline>
        <AccountGrid>
          <Input
            type="text"
            label="School or University"
            value={null}
            onValue={() => {}}
          />
          <Input type="text" label="Degree" value={null} onValue={() => {}} />
          <Input
            type="text"
            label="Field of Study"
            value={null}
            onValue={() => {}}
          />
          <Stack direction="horizontal">
            <Input type="date" label="From" value={null} onValue={() => {}} />
            <Input type="date" label="To" value={null} onValue={() => {}} />
          </Stack>
          <Input
            type="text"
            label="Overall GPA"
            value={null}
            onValue={() => {}}
          />
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-end',
              marginBottom: '16px',
            }}
          >
            <AddIcon style={{ color: '#9F9FB0' }} />
            <DeleteIcon style={{ color: '#9F9FB0' }} />
          </div>
        </AccountGrid>
        <AccountHeadline>Skills</AccountHeadline>
        <Input
          type="text"
          label="Type to Add Skills"
          value={null}
          onValue={() => {}}
          style={{ maxWidth: '50%' }}
        />
        <AccountHeadline>Social Media</AccountHeadline>
        <AccountGrid>
          <Input
            type="text"
            label="Instagram"
            value={null}
            onValue={() => {}}
          />
          <Input type="text" label="LinkedIn" value={null} onValue={() => {}} />
          <Input type="text" label="TikTok" value={null} onValue={() => {}} />
          <Input type="text" label="Website" value={null} onValue={() => {}} />
        </AccountGrid>
        <AccountHeadline>House Preferences</AccountHeadline>
        <AccountGrid>
          <Input type="text" label="Theme" value={null} onValue={() => {}} />
          <Input
            type="text"
            label="Skills of Others"
            value={null}
            onValue={() => {}}
          />
          <Input type="text" label="Location" value={null} onValue={() => {}} />
          <Input type="text" label="Language" value={null} onValue={() => {}} />
          <Input
            type="min-max"
            label="Monthly Rent"
            value={{ min: null, max: null }}
            onValue={() => {}}
          />
          <Input
            type="min-max"
            label="Age"
            value={{ min: null, max: null }}
            onValue={() => {}}
          />
          <Input
            type="min-max"
            label="Tenants per House"
            value={{ min: null, max: null }}
            onValue={() => {}}
          />
          <Input
            type="text"
            label="Interests and Hobbies"
            value={null}
            onValue={() => {}}
          />
          <Input type="text" label="Diet" value={null} onValue={() => {}} />
        </AccountGrid>
        <Input
          type="text"
          label="Motivation"
          value={null}
          onValue={() => {}}
          multiline
          rows={3}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ maxWidth: '250px' }}
        >
          Save
        </Button>
      </Stack>
    </ApplicationContainer>
  </Card>
);

export default OverviewPage;
