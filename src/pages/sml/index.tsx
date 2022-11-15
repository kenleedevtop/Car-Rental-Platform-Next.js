import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const SML = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('SML');
  }, []);

  return (
    <>
      <Title>SML</Title>
      SML
    </>
  );
};

export default SML;
