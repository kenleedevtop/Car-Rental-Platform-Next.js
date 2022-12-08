import React, { useState } from 'react';
import { Header, PageContainer } from 'components/custom';
import {
  RegistrationMain,
  RegistrationTitle,
  RegistrationSubtitle,
} from 'features/registration/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { Stack } from 'components/system';

const Login = () => {
  const [filter, setFilter] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    affiliateSocial: null,
    affiliate: '',
  });

  return (
    <RegistrationMain>
      <Header />
      <PageContainer image="https://www.rheumatology.org/portals/0/Images/Health%20Care%20Team/Patient-Role.jpg">
        <Stack>
          <RegistrationTitle>Sign Up as Influencer</RegistrationTitle>
          <RegistrationSubtitle>
            Turn your voice into a force for positive change by signing up as a
            patient influencer below.
          </RegistrationSubtitle>
          <Stack direction="horizontal">
            <Input
              type="text"
              label="First Name"
              required
              placeholder="Please enter your first name"
              value={filter.firstName}
              onValue={(firstName) => setFilter({ ...filter, firstName })}
            />
            <Input
              type="text"
              label="Last Name"
              required
              placeholder="Please enter your last name"
              value={filter.lastName}
              onValue={(lastName) => setFilter({ ...filter, lastName })}
            />
          </Stack>
          <Stack direction="horizontal">
            <Input
              type="text"
              label="Username"
              required
              placeholder="Please enter your username"
              value={filter.username}
              onValue={(username) => setFilter({ ...filter, username })}
            />
            <Input
              type="text"
              label="Email"
              required
              placeholder="Please enter your email"
              value={filter.email}
              onValue={(email) => setFilter({ ...filter, email })}
            />
          </Stack>
          <Stack direction="horizontal">
            <Input
              type="text"
              label="Password"
              required
              placeholder="Please enter your password"
              value={filter.password}
              onValue={(password) => setFilter({ ...filter, password })}
            />
          </Stack>
          <Stack direction="horizontal">
            <InputGroup
              style={{ width: '100%' }}
              label="Affiliate Username"
              required
              inputRatio="1fr 1fr"
              elements={[
                {
                  value: filter.affiliateSocial,
                  onValue: (affiliateSocial) =>
                    setFilter({ ...filter, affiliateSocial }),
                  type: 'select',
                  placeholder: 'Instagram',
                  options: [
                    {
                      value: 'instagram',
                      label: 'Instagram',
                    },
                    {
                      value: 'youtube',
                      label: 'Youtube',
                    },
                    {
                      value: 'tikTok',
                      label: 'TikTok',
                    },
                  ],
                },
                {
                  value: filter.affiliate,
                  onValue: (affiliate) => setFilter({ ...filter, affiliate }),
                  placeholder: 'Please enter affiliate username',
                  type: 'text',
                },
              ]}
            />
          </Stack>
          <Button variant="contained" size="large" color="secondary">
            SIGN UP NOW
          </Button>
        </Stack>
      </PageContainer>
    </RegistrationMain>
  );
};

export default Login;
