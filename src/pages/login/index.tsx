import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { LoginPage } from 'features';

const Login = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Login');
  }, []);

  return (
    <>
      <Title>Login</Title>
      <LoginPage />
    </>
  );
};

export default Login;
