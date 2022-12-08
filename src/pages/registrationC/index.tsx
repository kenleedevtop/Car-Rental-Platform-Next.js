import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { RegisterCompanyPage, RegistrationInfluencerPage } from 'features';

const Login = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('RegistrationC');
  }, []);

  return (
    <>
      <Title>Registration</Title>
      <RegisterCompanyPage />
    </>
  );
};

export default Login;
