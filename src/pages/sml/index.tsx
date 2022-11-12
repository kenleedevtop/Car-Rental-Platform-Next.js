import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const SML = () => {
  const { setRouteName } = usePageContext();

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
