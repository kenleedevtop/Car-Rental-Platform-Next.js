import React, { useState } from 'react';
import { TQuestionProps } from 'features/create-survey/elements/question/types';
import {
  QuestionMain,
  QuestionHeader,
  QuestionHeaderActions,
  QuestionCounter,
  QuestionActions,
  QuestionBody,
  QuestionFooter,
} from 'features/create-survey/elements/question/styles';
import { Input, Switch } from 'components/ui';
import { CopyIcon, DeleteIcon, VerticalDotsIcon } from 'components/svg';
import { Answer } from 'features/create-survey/elements';

const Question = ({
  question,
  questionId,
  remove,
  copy,
  changeOptional,
  changeCredit,
  changeType,
  addAnswer,
  addOther,
  ...props
}: TQuestionProps) => {
  const [value, setValue] = useState('');

  return (
    <QuestionMain {...props}>
      <QuestionHeader>
        <QuestionCounter>
          <span>Question {questionId}</span>
          <Input
            type="text"
            placeholder="Enter question"
            value={value}
            onValue={(v) => {
              setValue(v);
            }}
          />{' '}
        </QuestionCounter>
        <QuestionHeaderActions>
          <Input
            type="number"
            placeholder="Question credit"
            value={question.credit}
            onValue={(v) => {
              changeCredit(question.id, v);
            }}
          />
          <Input
            type="select"
            placeholder="Short Answer"
            value={question.type}
            onValue={(v) => {
              changeType(question.id, v);
            }}
            options={[
              {
                value: 'short',
                label: 'Short Answer',
              },
              {
                value: 'paragraph',
                label: 'Paragraph',
              },
              {
                value: 'multichoice',
                label: 'Multichoice',
              },
              {
                value: 'multiselect',
                label: 'Multiselect',
              },
            ]}
          />
        </QuestionHeaderActions>
      </QuestionHeader>
      <QuestionBody>
        {question.type === 'short' && (
          <Answer
            addOther={addOther}
            hasOther={false}
            isLast
            questionId={question.id}
            add={addAnswer}
            answerType={question.type}
          />
        )}
        {question.type === 'paragraph' && (
          <Answer
            addOther={addOther}
            hasOther={false}
            isLast
            questionId={question.id}
            add={addAnswer}
            answerType={question.type}
          />
        )}
        {question.type === 'multichoice' &&
          question.answers.map((el, index) => (
            <Answer
              addOther={addOther}
              hasOther={el.hasOther}
              isLast={index === question.answers.length - 1}
              questionId={question.id}
              add={addAnswer}
              answerType={question.type}
            />
          ))}
        {question.type === 'multiselect' &&
          question.answers.map((el, index) => (
            <Answer
              addOther={addOther}
              hasOther={el.hasOther}
              isLast={index === question.answers.length - 1}
              questionId={question.id}
              add={addAnswer}
              answerType={question.type}
            />
          ))}
      </QuestionBody>
      <QuestionFooter>
        <CopyIcon
          onClick={() => {
            copy(question.id);
          }}
        />
        <DeleteIcon
          onClick={() => {
            remove(question.id);
          }}
        />
        <Switch
          value={question.optional}
          onValue={() => {
            changeOptional(question.id);
          }}
          label="Optional"
        />
      </QuestionFooter>
    </QuestionMain>
  );
};

export default Question;
