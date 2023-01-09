import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AmbasadorsPage } from 'features';

const DiscoverAmbasadors = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Discover Ambassadors');
  }, []);

  return (
    <>
      <Title>Discover Ambasadors</Title>
      {role === 'ADMIN' && <AmbasadorsPage />}
    </>
  );
};

export default DiscoverAmbasadors;
