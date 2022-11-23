import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { IncomePage } from 'features';

const Income = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Income');
  }, []);

  return (
    <>
      <Title>Income</Title>
      <IncomePage />
    </>
  );
};

export default Income;
