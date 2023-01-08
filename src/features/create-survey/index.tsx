import { CardWithText, Tabs } from 'components/custom';
import React, { useEffect, useState } from 'react';
import { Question } from 'features/create-survey/elements';
import {
  CreateSurveyPageMain,
  AddQuestion,
  QuestionContainer,
  CreateSurveyActions,
  CreditContainer,
} from 'features/create-survey/styles';
import { Button, Card, Label } from 'components/ui';
import { AddIcon } from 'components/svg';
import { v4 } from 'uuid';
import {
  DQuestionMultichoiceConstructor,
  DQuestionMultiselectConstructor,
  DQuestionParagraphConstructor,
  DQuestionShortConstructor,
} from 'features/create-survey/elements/question/data';
import {
  TSurveyQuestionData,
  TSurveyQuestionType,
} from 'features/create-survey/types';

const CreateSurveyPage = () => {
  const [tab, setTab] = useState(0);

  const [questions, setQuestions] = useState<Array<TSurveyQuestionData>>([
    {
      id: v4(),
      credit: '',
      type: 'short',
      optional: false,
      question: '',
    },
  ]);

  const [credit, setCredit] = useState(0);

  // const handleTab = e => {}

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: v4(),
        credit: '',
        type: 'short',
        optional: false,
        question: '',
      },
    ]);
  };

  const deleteQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((el) => el.id !== id));
  };

  const copyQuestion = (id: string) => {
    const helperId = questions.findIndex((el) => el.id === id);
    const helper = questions.find((el) => el.id === id);
    if (helper && helperId > -1) {
      const copiedQuestion = { ...helper, id: v4() };
      const copiedArray = [...questions];
      copiedArray.splice(helperId, 0, copiedQuestion);
      setQuestions(copiedArray);
    }
  };

  // type fix
  const updateQuestion = (id: string) => (a: any) => {
    setQuestions(questions.map((x) => (x.id === id ? { ...x, ...a } : x)));
  };

  const updateCredit = () => {
    let sum: number = 0;
    questions.forEach((x) => {
      sum += Number(x.credit);
    });
    setCredit(sum);
  };

  useEffect(() => {
    console.log(questions);
    updateCredit();
  }, [questions]);

  const changeType = (id: string) => (value: TSurveyQuestionType) => {
    const questionTypes = {
      short: DQuestionShortConstructor,
      paragraph: DQuestionParagraphConstructor,
      multichoice: DQuestionMultichoiceConstructor,
      multiselect: DQuestionMultiselectConstructor,
    };
    const newQuestion = questionTypes[value]();
    setQuestions((prev) => prev.map((el) => (el.id === id ? newQuestion : el)));
  };

  const submitSurvey = () => {};

  return (
    <CreateSurveyPageMain>
      <Tabs
        value={tab}
        onValue={setTab}
        tabs={['Questions', 'Responses', 'Participants']}
      />

      {tab === 0 && (
        <>
          <CardWithText title="Survey Name">
            <Label>
              Question credits <CreditContainer>{credit}</CreditContainer>
            </Label>
          </CardWithText>
          <Card>
            <QuestionContainer>
              {questions.map((el, index) => (
                <Question
                  questionId={index + 1}
                  copy={copyQuestion}
                  remove={deleteQuestion}
                  updateQuestion={updateQuestion(el.id)}
                  changeType={changeType(el.id)}
                  question={el}
                />
              ))}
            </QuestionContainer>
            <CreateSurveyActions>
              <AddQuestion onClick={addQuestion}>
                <AddIcon />
                Add new question
              </AddQuestion>
              <Button
                size="large"
                color="primary"
                variant="contained"
                onClick={submitSurvey}
              >
                Submit Survey
              </Button>
            </CreateSurveyActions>
          </Card>
        </>
      )}
    </CreateSurveyPageMain>
  );
};

export default CreateSurveyPage;
