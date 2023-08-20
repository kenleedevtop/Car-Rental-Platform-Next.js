import React, { useState } from 'react';

import {
  AccountChange,
  AccountMain,
  AccountSpan,
  AccountContainer,
  AccountForm,
  AccountStack,
  AccountHeadline,
  AccountGrid,
  ApplicationContainer,
} from 'features/account/style';
import { Button, Checkbox, Input, Label } from 'components/ui';
import { ChangePasswordModal } from 'features/account/role/investor/elements';
import { useModal } from 'hooks';
import { CardWithText, Tabs } from 'components/custom';
import { Stack } from 'components/system';
import { AddIcon, DeleteIcon } from 'components/svg';

const AccountPage = ({ ...props }) => {
  const [state, setState] = useState<any>({
    firstName: null,
    lastName: null,
    email: null,
    password: '',
  });

  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  const [tabs, setTabs] = useState(0);

  return (
    <Stack {...props}>
      <Tabs
        tabs={['Info', 'Property Preference']}
        value={tabs}
        onValue={setTabs}
      />
      {tabs === 0 && (
        <CardWithText title="Info">
          <AccountGrid>
            <Input
              type="text"
              label="First Name"
              value={state.firstName}
              onValue={(firstName) => setState({ ...state, firstName })}
              disabled
            />
            <Input
              type="text"
              label="Last Name"
              value={state.lastName}
              onValue={(lastName) => setState({ ...state, lastName })}
              disabled
            />
            <Input
              type="select"
              label="Location"
              value={state.email}
              onValue={(email) => setState({ ...state, email })}
              disabled
            />
            <Input
              type="text"
              label="Email"
              value={state.email}
              onValue={(email) => setState({ ...state, email })}
              disabled
            />
            <AccountChange>
              <Input
                type="text"
                label="Password"
                placeholder="**********"
                value={state.password}
                onValue={(password) => setState({ ...state, password })}
                disabled
              />
              <AccountSpan onClick={openCpModal}>Change Password</AccountSpan>
            </AccountChange>
          </AccountGrid>
        </CardWithText>
      )}
      {tabs === 1 && (
        <CardWithText title="Property Preference">
          <AccountGrid>
            <Input
              type="text"
              label="Property Type"
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
              label="Number of Bedrooms"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Number of Bathrooms"
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
              label="Interested in Properties"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="Interested in Shares per Property"
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
              label="Proximity"
              placeholder="Please Select"
              value={null}
              onValue={() => {}}
              disabled
            />
            <Input
              type="text"
              label="View"
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

export default AccountPage;
