import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const DiscoverInfluencers = () => {
  const { setRouteName } = usePageContext();

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
