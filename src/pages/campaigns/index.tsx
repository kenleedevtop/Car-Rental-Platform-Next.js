import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Campaigns = () => {
  const { setRouteName } = usePageContext();

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
