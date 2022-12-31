import React, { useState } from 'react';
import { TAnswerProps } from 'features/create-survey/elements/answer/types';
import {
  AnswerMain,
  AnswerArea,
  AddAnswerArea,
  AreaHighlight,
} from 'features/create-survey/elements/answer/styles';
import { Checkbox, Input, RadioButton } from 'components/ui';

const Answer = ({
  answerType,
  questionId,
  isLast,
  hasOther,
  add,
  addOther,
  ...props
}: TAnswerProps) => {
  const [answer, setAnswer] = useState('');
  const [other, setOther] = useState('');

  console.log('IS IT LAST?', isLast);

  return (
    <AnswerMain>
      {answerType === 'short' && (
        <AnswerArea>
          <Input
            type="text"
            placeholder="Short Text Answer"
            value={answer}
            onValue={(short) => setAnswer(short)}
          />
        </AnswerArea>
      )}
      {answerType === null && (
        <AnswerArea>
          <Input
            type="text"
            placeholder="Short Text Answer"
            value={answer}
            onValue={(short) => setAnswer(short)}
          />
        </AnswerArea>
      )}
      {answerType === 'paragraph' && (
        <AnswerArea>
          <Input
            type="text"
            multiline
            rows={3}
            placeholder="Paragraph Answer"
            value={answer}
            onValue={(paragraph) => setAnswer(paragraph)}
          />
        </AnswerArea>
      )}
      {answerType === 'multichoice' && (
        <AnswerArea>
          <RadioButton label="" value="" onClick={() => {}} />
          <Input
            type="text"
            placeholder="Enter answer"
            value={answer}
            onValue={(multichoice) => setAnswer(multichoice)}
          />
        </AnswerArea>
      )}
      {answerType === 'multiselect' && (
        <AnswerArea>
          <Checkbox label="" />
          <Input
            type="text"
            placeholder="Enter answer"
            value={answer}
            onValue={(multiselect) => {
              setAnswer(multiselect);
            }}
          />
        </AnswerArea>
      )}
      {hasOther && answerType === 'multichoice' && (
        <AnswerArea>
          <RadioButton label="" value="" onClick={() => {}} />
          <Input
            type="text"
            placeholder="Other"
            value={other}
            onValue={(cOther) => setOther(cOther)}
          />
        </AnswerArea>
      )}
      {hasOther && answerType === 'multiselect' && (
        <AnswerArea>
          <Checkbox label="" />
          <Input
            type="text"
            placeholder="Other"
            value={other}
            onValue={(sOther) => {
              setOther(sOther);
            }}
          />
        </AnswerArea>
      )}
      {isLast &&
        (answerType === 'multichoice' || answerType === 'multiselect') && (
          <AddAnswerArea>
            Add
            <AreaHighlight
              onClick={() => {
                add(questionId);
              }}
            >
              new answer
            </AreaHighlight>
            or
            <AreaHighlight
              onClick={() => (isLast ? addOther(questionId) : null)}
            >
              other.
            </AreaHighlight>
          </AddAnswerArea>
        )}
    </AnswerMain>
  );
};

export default Answer;
