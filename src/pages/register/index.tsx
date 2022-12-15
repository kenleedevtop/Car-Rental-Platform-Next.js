import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { RegisterCompanyPage, RegisterInfluencerPage } from 'features';
import { useRouter } from 'next/router';

const Login = () => {
  const { setRouteName } = useAppContext();
  const { query } = useRouter();

  useEffect(() => {
    setRouteName('Register');
  }, []);

  return (
    <>
      <Title>Register</Title>
      {query.as === 'company' ? (
        <RegisterCompanyPage />
      ) : (
        <RegisterInfluencerPage />
      )}
    </>
  );
};

export default Login;
