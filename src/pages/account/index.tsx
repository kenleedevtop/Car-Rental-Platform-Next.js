import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import {
  ClientAccountPage,
  AmbasadorAccountPage,
  InfluencerAccountPage,
} from 'features';

const Account = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Account');
  }, []);

  return (
    <>
      <Title>Account</Title>
      {role === 'client' && <ClientAccountPage />}
      {role === 'ambasador' && <AmbasadorAccountPage />}
      {role === 'influencer' && <InfluencerAccountPage />}
    </>
  );
};

export default Account;
