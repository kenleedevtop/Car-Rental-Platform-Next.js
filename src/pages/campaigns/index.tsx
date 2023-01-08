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
      {role === 'ADMIN' && <AdminCampaignsPage />}
      {role === 'CLIENT' && <ClientCampaignsPage />}
      {role === 'INFLUENCER' && <InfluencerCampaignsPage />}
    </>
  );
};

export default Campaigns;
