import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Benefits = () => {
  const { setRouteName } = usePageContext();

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
