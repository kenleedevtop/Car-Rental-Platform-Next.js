import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import {
  AdminCampaignsPage,
  ClientCampaignsPage,
  InfluencerCampaignsPage,
} from 'features';

const Campaigns = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Campaigns');
  }, []);

  return (
    <>
      <Title>Campaigns</Title>
      {role === 'admin' && <AdminCampaignsPage />}
      {role === 'client' && <ClientCampaignsPage />}
      {role === 'influencer' && <InfluencerCampaignsPage />}
    </>
  );
};

export default Campaigns;
