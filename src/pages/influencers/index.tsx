import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const Influencers = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Influencers');
  }, []);

  return (
    <>
      <Title>Influencers</Title>
      Influencers
    </>
  );
};

export default Influencers;
