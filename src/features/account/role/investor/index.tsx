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
import { Button, Checkbox, Input } from 'components/ui';
import { ChangePasswordModal } from 'features/account/role/investor/elements';
import { useModal } from 'hooks';
import { Tabs } from 'components/custom';
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
    <AccountMain {...props}>
      <Stack>
        <Tabs tabs={['Info', 'Application']} value={tabs} onValue={setTabs} />
        {tabs === 0 && (
          <AccountContainer>
            <AccountForm>
              <AccountStack direction="horizontal">
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
              </AccountStack>
              <AccountChange>
                <Input
                  type="text"
                  label="Email"
                  value={state.email}
                  onValue={(email) => setState({ ...state, email })}
                  disabled
                />
              </AccountChange>
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
            </AccountForm>
          </AccountContainer>
        )}
        {tabs === 1 && (
          <ApplicationContainer>
            <Stack>
              <AccountHeadline>Work Experience</AccountHeadline>
              <AccountGrid>
                <Input
                  type="text"
                  label="Job Title"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Company"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Location"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Stack direction="horizontal">
                  <Input
                    type="date"
                    label="From"
                    value={null}
                    onValue={() => {}}
                    disabled
                  />
                  <Input
                    type="date"
                    label="To"
                    value={null}
                    onValue={() => {}}
                    disabled
                  />
                </Stack>
                <Input
                  type="text"
                  label="Role Description"
                  value={null}
                  onValue={() => {}}
                  disabled
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
                  disabled
                />
                <Input
                  type="text"
                  label="Degree"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Field of Study"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Stack direction="horizontal">
                  <Input
                    type="date"
                    label="From"
                    value={null}
                    onValue={() => {}}
                    disabled
                  />
                  <Input
                    type="date"
                    label="To"
                    value={null}
                    onValue={() => {}}
                    disabled
                  />
                </Stack>
                <Input
                  type="text"
                  label="Overall GPA"
                  value={null}
                  onValue={() => {}}
                  disabled
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
                disabled
                style={{ maxWidth: '50%' }}
              />
              <AccountHeadline>Social Media</AccountHeadline>
              <AccountGrid>
                <Input
                  type="text"
                  label="Instagram"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="LinkedIn"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="TikTok"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Website"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
              </AccountGrid>
              <AccountHeadline>House Preferences</AccountHeadline>
              <AccountGrid>
                <Input
                  type="text"
                  label="Theme"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Skills of Others"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Location"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Language"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="min-max"
                  label="Monthly Rent"
                  value={{ min: null, max: null }}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="min-max"
                  label="Age"
                  value={{ min: null, max: null }}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="min-max"
                  label="Tenants per House"
                  value={{ min: null, max: null }}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Interests and Hobbies"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
                <Input
                  type="text"
                  label="Diet"
                  value={null}
                  onValue={() => {}}
                  disabled
                />
              </AccountGrid>
              <Input
                type="text"
                label="Motivation"
                value={null}
                onValue={() => {}}
                disabled
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
        )}
      </Stack>

      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </AccountMain>
  );
};

export default AccountPage;
