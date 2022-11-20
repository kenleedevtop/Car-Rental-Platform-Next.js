import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { CampaignsPage } from 'features';

const Campaigns = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Campaigns');
  }, []);

  return (
    <>
      <Title>Campaigns</Title>
      <CampaignsPage />
    </>
  );
};

export default Campaigns;
