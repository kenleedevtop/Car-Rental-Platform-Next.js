import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminDiscoverInfluencersPage } from 'features';

const DiscoverInfluencers = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Discover Influencers');
  }, []);

  return (
    <>
      <Title>Discover Influencers</Title>
      {role === 'admin' && <AdminDiscoverInfluencersPage />}
    </>
  );
};

export default DiscoverInfluencers;
