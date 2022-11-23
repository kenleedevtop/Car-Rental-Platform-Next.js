import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AmbasadorHomePage, HomePage } from 'features';

const Home = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  return (
    <>
      <Title>Home</Title>
      {role === 'Admin' ? <HomePage /> : <AmbasadorHomePage />}
    </>
  );
};

export default Home;
