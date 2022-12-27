import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { CreateSurveyPage } from 'features';

const CreateSurvey = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Create Survey');
  }, []);

  return (
    <>
      <Title>Create Survey</Title>
      {role === 'admin' && <CreateSurveyPage />}
    </>
  );
};

export default CreateSurvey;
