import React, { useState } from 'react';
import { Header } from 'components/custom';
import { PageLayout } from 'layouts';
import {
  LoginMain,
  LoginTitle,
  LoginSubtitle,
  LoginSpan,
  LoginAction,
} from 'features/login/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { Stack } from 'components/system';

const Login = () => {
  const [filter, setFilter] = useState({
    email: '',
    password: '',
  });

  return (
    <LoginMain>
      <Header />
      <PageLayout image="https://www.rheumatology.org/portals/0/Images/Health%20Care%20Team/Patient-Role.jpg">
        <Stack>
          <LoginTitle>Login Now</LoginTitle>
          <LoginSubtitle>
            Access updates, new opportunities, and messages all in one place by
            logging in below.
          </LoginSubtitle>
          <Input
            type="text"
            label="Email"
            value={filter.email}
            onValue={(email) => setFilter({ ...filter, email })}
          />
          <Input
            type="text"
            label="Password"
            value={filter.password}
            onValue={(password) => setFilter({ ...filter, password })}
          />
          <LoginAction direction="horizontal">
            <Checkbox label="Remember Me" />
            <LoginSpan>Lost your password?</LoginSpan>
          </LoginAction>
          <Button variant="contained" size="large" color="secondary">
            LOGIN NOW
          </Button>
        </Stack>
      </PageLayout>
    </LoginMain>
  );
};

export default Login;
