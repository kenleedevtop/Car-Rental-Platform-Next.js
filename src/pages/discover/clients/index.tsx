import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { DiscoverClientsPage } from 'features';

const DiscoverClients = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Discover Clients');
  }, []);

  return (
    <>
      <Title>Discover Clients</Title>
      <DiscoverClientsPage />
    </>
  );
};

export default DiscoverClients;
