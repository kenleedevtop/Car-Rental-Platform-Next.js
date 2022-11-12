import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Home = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  return (
    <>
      <Title>Home</Title>
      Home
    </>
  );
};

export default Home;
