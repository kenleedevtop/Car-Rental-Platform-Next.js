import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const DiscoverInfluencers = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Discover Influencers');
  }, []);

  return (
    <>
      <Title>Discover Influencers</Title>
      Discover Influencers
    </>
  );
};

export default DiscoverInfluencers;
