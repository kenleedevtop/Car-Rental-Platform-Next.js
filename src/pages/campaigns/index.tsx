import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const Campaigns = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Campaigns');
  }, []);

  return (
    <>
      <Title>Campaigns</Title>
      Campaigns
    </>
  );
};

export default Campaigns;
