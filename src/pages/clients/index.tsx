import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const Clients = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Clients');
  }, []);

  return (
    <>
      <Title>Clients</Title>
      Clients
    </>
  );
};

export default Clients;
