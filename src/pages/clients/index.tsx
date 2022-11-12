import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Clients = () => {
  const { setRouteName } = usePageContext();

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
