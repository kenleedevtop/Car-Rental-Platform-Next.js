import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { RegisterCompanyPage, RegistrationInfluencerPage } from 'features';

const Login = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Registration');
  }, []);

  return (
    <>
      <Title>Registration</Title>
      <RegistrationInfluencerPage />
    </>
  );
};

export default Login;
