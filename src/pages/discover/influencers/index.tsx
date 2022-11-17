import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { DiscoverInfluencersPage } from 'features';

const DiscoverInfluencers = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Discover Influencers');
  }, []);

  return (
    <>
      <Title>Discover Influencers</Title>
      <DiscoverInfluencersPage />
    </>
  );
};

export default DiscoverInfluencers;
