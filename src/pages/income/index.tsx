import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Income = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Income');
  }, []);

  return (
    <>
      <Title>Income</Title>
      Income
    </>
  );
};

export default Income;
