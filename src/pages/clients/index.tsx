import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminClientsPage } from 'features';

const Clients = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Clients');
  }, []);

  return (
    <>
      <Title>Clients</Title>
      {role === 'admin' && <AdminClientsPage />}
    </>
  );
};

export default Clients;
