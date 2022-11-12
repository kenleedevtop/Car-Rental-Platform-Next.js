import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const DiscoverClients = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Discover Clients');
  }, []);

  return (
    <>
      <Title>Discover Clients</Title>
      Discover Clients
    </>
  );
};

export default DiscoverClients;
