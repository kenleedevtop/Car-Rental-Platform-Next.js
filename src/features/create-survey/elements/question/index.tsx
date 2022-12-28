import React, { useState } from 'react';
import {
  TQuestionData,
  TQuestionProps,
} from 'features/create-survey/elements/question/types';
import {
  QuestionMain,
  QuestionHeader,
  QuestionHeaderActions,
  QuestionCounter,
  QuestionActions,
  QuestionBody,
  QuestionFooter,
  QuestionFooterLeft,
  QuestionHighlight,
  QuestionFooterRight,
} from 'features/create-survey/elements/question/styles';
import { Input, Switch } from 'components/ui';
import {
  AddIcon,
  CopyIcon,
  DeleteIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { Answer } from 'features/create-survey/elements';

const Question = ({ counter, type = 'short', ...props }: TQuestionProps) => {
  const [questionData, setQuestionData] = useState<TQuestionData>({
    credit: '',
    answerType: null,
    isOptional: false,
  });

  return (
    <QuestionMain {...props}>
      <QuestionHeader>
        <QuestionCounter>Question {counter}</QuestionCounter>
        <QuestionHeaderActions>
          <Input
            type="number"
            placeholder="Question credit"
            value={questionData.credit}
            onValue={(credit) => setQuestionData({ ...questionData, credit })}
          />
          <Input
            type="select"
            placeholder="Short Answer"
            value={questionData.answerType}
            onValue={(answerType) =>
              setQuestionData({ ...questionData, answerType })
            }
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
          <QuestionActions>
            <VerticalDotsIcon />
          </QuestionActions>
        </QuestionHeaderActions>
      </QuestionHeader>
      <QuestionBody>
        <Answer answerType={type} />
      </QuestionBody>
      <QuestionFooter>
        <QuestionFooterLeft>
          Add <QuestionHighlight>new answer</QuestionHighlight>
          or <QuestionHighlight>other.</QuestionHighlight>
        </QuestionFooterLeft>
        <QuestionFooterRight>
          <AddIcon />
          <CopyIcon />
          <DeleteIcon />
          <Switch
            value={questionData.isOptional}
            onValue={(isOptional) =>
              setQuestionData({ ...questionData, isOptional })
            }
            label="Optional"
          />
        </QuestionFooterRight>
      </QuestionFooter>
    </QuestionMain>
  );
};

export default Question;
