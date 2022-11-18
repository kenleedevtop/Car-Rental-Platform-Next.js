import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ClientsPage } from 'features';

const Clients = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Clients');
  }, []);

  return (
    <>
      <Title>Clients</Title>
      <ClientsPage />
    </>
  );
};

export default Clients;
