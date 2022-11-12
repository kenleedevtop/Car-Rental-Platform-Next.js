import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Finance = () => {
  const { setRouteName } = usePageContext();

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
