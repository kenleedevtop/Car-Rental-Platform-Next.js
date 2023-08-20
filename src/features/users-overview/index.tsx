import React, { useState } from 'react';

import { AccountGrid } from 'features/users-overview/styles';
import { Input, Label } from 'components/ui';
import { Stack } from 'components/system';
import { CardWithText, Tabs } from 'components/custom';

const OverviewPage = ({ ...props }) => {
  const [tabs, setTabs] = useState(0);

  return (
    <Stack {...props}>
      <Tabs
        tabs={['Info', 'Supercar Preference']}
        value={tabs}
        onValue={setTabs}
      />
      {tabs === 0 && (
        <CardWithText title="Info">
          <AccountGrid>
            <Input
              type="text"
              label="First Name"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Last Name"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="select"
              label="Location"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Email"
              value={null}
              onValue={() => {}}
              disabled
            />
          </AccountGrid>
        </CardWithText>
      )}
      {tabs === 1 && (
        <CardWithText title="Supercar Preference">
          <AccountGrid>
            <Input
              type="text"
              label="Brand"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Model"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Location"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Condition"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Amenities"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Stack>
              <Label style={{ marginBottom: '-1.2rem', color: '#7E839F' }}>
                Budget per Share
              </Label>
              <Stack direction="horizontal">
                <Input
                  type="text"
                  placeholder="From"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  placeholder="To"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
              </Stack>
            </Stack>
            <Input
              type="text"
              label="Interested in Supercars"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Interested in Shares per Supercar"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Interior Style"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Exterior Style"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Engine Type"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Engine (HP)"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Additional Comments"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
              disabled
              multiline
              rows={3}
              style={{ gridColumn: '1/3' }}
            />
          </AccountGrid>
        </CardWithText>
      )}
    </Stack>
  );
};

export default OverviewPage;
