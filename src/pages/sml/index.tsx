import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { SmlPage } from 'features';

const SML = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('SML');
  }, []);

  return (
    <>
      <Title>SML</Title>
      <SmlPage />
    </>
  );
};

export default SML;
