import { CardWithText } from 'components/custom';
import React, { useState } from 'react';
import { Question } from 'features/create-survey/elements';
import { CreateSurveyPageMain } from 'features/create-survey/styles';

const CreateSurveyPage = () => {
  const [counter, setCounter] = useState(1);

  return (
    <CreateSurveyPageMain>
      <CardWithText title="Survey Name" description="Question credit 10" />
      <Question counter={counter} />
    </CreateSurveyPageMain>
  );
};

export default CreateSurveyPage;
