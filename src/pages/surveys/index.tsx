import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { SurveysPage } from 'features';

const Surveys = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Surveys');
  }, []);

  return (
    <>
      <Title>Surveys</Title>
      <SurveysPage />
    </>
  );
};

export default Surveys;
