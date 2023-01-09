import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminInfluencersPage } from 'features';

const Influencers = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Influencers');
  }, []);

  return (
    <>
      <Title>Influencers</Title>
      {role === 'ADMIN' && <AdminInfluencersPage />}
    </>
  );
};

export default Influencers;
