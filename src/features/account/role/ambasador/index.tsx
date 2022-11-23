import React, { useState } from 'react';

import { AccountMain, AccountSpan } from 'features/account/style';
import { Grid, GridCell, Stack } from 'components/system';
import { Input } from 'components/ui';

const AccountPage = ({ ...props }) => {
  const [filter, setFilter] = useState({
    firstname: '',
    lastName: '',
    company: '',
    role: '',
    email: '',
    password: '',
  });

  return (
    <AccountMain {...props}>
      <Grid columns={4}>
        <GridCell columnSpan={2}>
          <Stack>
            <Grid columns={2}>
              <Input
                type="text"
                label="First Name"
                placeholder="John"
                value={filter.firstname}
                onValue={(firstname) => setFilter({ ...filter, firstname })}
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Doe"
                value={filter.lastName}
                onValue={(lastName) => setFilter({ ...filter, lastName })}
              />
            </Grid>
            <Grid columns={2}>
              <Input
                type="text"
                label="Company"
                placeholder="John"
                value={filter.company}
                onValue={(company) => setFilter({ ...filter, company })}
              />
              <Input
                type="text"
                label="Role"
                placeholder="Doe"
                value={filter.role}
                onValue={(role) => setFilter({ ...filter, role })}
              />
            </Grid>
            <Input
              type="text"
              label="Email"
              placeholder="johndoe@gmail.com"
              value={filter.email}
              onValue={(email) => setFilter({ ...filter, email })}
            />
            <AccountSpan>Change Email</AccountSpan>
            <Input
              type="text"
              label="Password"
              placeholder="**********"
              value={filter.password}
              onValue={(password) => setFilter({ ...filter, password })}
            />
            <AccountSpan>Change Password</AccountSpan>
          </Stack>
        </GridCell>
      </Grid>
    </AccountMain>
  );
};

export default AccountPage;
