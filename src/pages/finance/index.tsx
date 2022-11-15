import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const Finance = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Finance');
  }, []);

  return (
    <>
      <Title>Finance</Title>
      Finance
    </>
  );
};

export default Finance;
