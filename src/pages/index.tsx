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
      {role === 'admin' && <AdminHomePage />}
      {role === 'client' && <ClientHomePage />}
      {role === 'influencer' && <InfluencerHomePage />}
      {role === 'ambasador' && <AmbasadorHomePage />}
    </>
  );
};

export default Home;
