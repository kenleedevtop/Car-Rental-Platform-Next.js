import { CardWithText } from 'components/custom';
import React, { useState } from 'react';
import { Question } from 'features/create-survey/elements';
import {
  CreateSurveyPageMain,
  AddQuestion,
  QuestionContainer,
} from 'features/create-survey/styles';
import { Card } from 'components/ui';
import { AddIcon } from 'components/svg';
import {
  TQuestionData,
  TQuestionType,
} from 'features/create-survey/elements/question/types';
import { v4 } from 'uuid';
import {
  DQuestionMultichoiceConstructor,
  DQuestionMultiselectConstructor,
  DQuestionParagraphConstructor,
  DQuestionShortConstructor,
} from 'features/create-survey/elements/question/data';

const CreateSurveyPage = () => {
  const [questions, setQuestions] = useState<Array<TQuestionData>>([
    {
      id: v4(),
      credit: 0,
      type: 'short',
      optional: false,
      answer: '',
    },
  ]);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: v4(),
        credit: 0,
        type: 'short',
        optional: false,
        answer: '',
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

  const changeOptional = (id: string) => {
    setQuestions((prev) =>
      prev.map((el) => (el.id === id ? { ...el, optional: !el.optional } : el))
    );
  };

  const changeCredit = (id: string, value: number) => {
    setQuestions((prev) =>
      prev.map((el) => (el.id === id ? { ...el, credit: value } : el))
    );
  };

  const changeType = (id: string, value: TQuestionType) => {
    const questionTypes = {
      short: DQuestionShortConstructor,
      paragraph: DQuestionParagraphConstructor,
      multichoice: DQuestionMultichoiceConstructor,
      multiselect: DQuestionMultiselectConstructor,
    };
    const newQuestion = questionTypes[value]();
    setQuestions((prev) => prev.map((el) => (el.id === id ? newQuestion : el)));
  };

  const addOther = (id: string) => {
    const helper = questions.find((el) => el.id === id);
    if (
      helper &&
      (helper.type === 'multichoice' || helper.type === 'multiselect')
    ) {
      // helper.answers.map((el) => ({ ...el, hasOther: false }));

      const secondHelper = helper.answers.map((el, index) =>
        index === helper.answers.length - 1 ? { ...el, hasOther: true } : el
      );
      setQuestions((prev) =>
        prev.map((el) => (el.id === id ? { ...el, answers: secondHelper } : el))
      );
    }
  };

  const addAnswer = (id: string) => {
    const helper = questions.find((el) => el.id === id);
    if (
      helper &&
      (helper.type === 'multichoice' || helper.type === 'multiselect')
    ) {
      helper.answers = [
        ...helper.answers,
        { id: v4(), value: '', isLast: false, hasOther: false },
      ];
      const secondHelper = helper.answers;
      setQuestions((prev) =>
        prev.map((el) => (el.id === id ? { ...el, answers: secondHelper } : el))
      );

      helper.answers.map((el) => (el.hasOther ? addOther(id) : null));
    }
  };

  return (
    <CreateSurveyPageMain>
      <CardWithText title="Survey Name" description="Question credit 10" />
      <Card>
        <QuestionContainer>
          {questions.map((el, index) => (
            <Question
              questionId={index + 1}
              changeOptional={changeOptional}
              changeCredit={changeCredit}
              changeType={changeType}
              copy={copyQuestion}
              remove={deleteQuestion}
              addAnswer={addAnswer}
              addOther={addOther}
              question={el}
            />
          ))}
        </QuestionContainer>
        <AddQuestion onClick={addQuestion}>
          <AddIcon />
          Add new question
        </AddQuestion>
      </Card>
    </CreateSurveyPageMain>
  );
};

export default CreateSurveyPage;
