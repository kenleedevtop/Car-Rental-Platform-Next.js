import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Help = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Help');
  }, []);

  return (
    <>
      <Title>Help</Title>
      Help
    </>
  );
};

export default Help;
