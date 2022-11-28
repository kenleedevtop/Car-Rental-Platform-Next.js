import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminDiscoverClientsPage } from 'features';

const DiscoverClients = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Discover Clients');
  }, []);

  return (
    <>
      <Title>Discover Clients</Title>
      {role === 'admin' && <AdminDiscoverClientsPage />}
    </>
  );
};

export default DiscoverClients;
