import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { HomePage } from 'features';

const Home = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  return (
    <>
      <Title>Home</Title>
      <HomePage />
    </>
  );
};

export default Home;
