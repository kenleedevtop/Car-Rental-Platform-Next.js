import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Surveys = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Surveys');
  }, []);

  return (
    <>
      <Title>Surveys</Title>
      Surveys
    </>
  );
};

export default Surveys;
