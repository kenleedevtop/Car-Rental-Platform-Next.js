import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import {
  AdminHomePage,
  ClientHomePage,
  AmbasadorHomePage,
  InfluencerHomePage,
} from 'features';

const Home = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  return (
    <>
      <Title>Home</Title>
      {role === 'ADMIN' && <AdminHomePage />}
      {role === 'CLIENT' && <ClientHomePage />}
      {role === 'INFLUENCER' && <InfluencerHomePage />}
      {role === 'AMBASADOR' && <AmbasadorHomePage />}
    </>
  );
};

export default Home;
