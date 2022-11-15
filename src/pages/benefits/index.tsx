import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const Benefits = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Benefits');
  }, []);

  return (
    <>
      <Title>Benefits</Title>
      Benefits
    </>
  );
};

export default Benefits;
