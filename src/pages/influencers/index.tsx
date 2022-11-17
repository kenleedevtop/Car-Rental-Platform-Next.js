import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { InfluencersPage } from 'features';

const Influencers = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Influencers');
  }, []);

  return (
    <>
      <Title>Influencers</Title>
      <InfluencersPage />
    </>
  );
};

export default Influencers;
