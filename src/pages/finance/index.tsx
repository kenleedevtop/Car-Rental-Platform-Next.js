import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { FinancePage } from 'features';

const Finance = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Finance');
  }, []);

  return (
    <>
      <Title>Finance</Title>
      <FinancePage />
    </>
  );
};

export default Finance;
