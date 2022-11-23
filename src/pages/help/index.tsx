import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { HelpPage } from 'features';

const Help = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Help');
  }, []);

  return (
    <>
      <Title>Help</Title>
      <HelpPage />
    </>
  );
};

export default Help;
