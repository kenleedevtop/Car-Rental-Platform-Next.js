import React, { useState } from 'react';
import { TAnswerProps } from 'features/create-survey/elements/answer/types';
import {
  AnswerMain,
  AnswerArea,
} from 'features/create-survey/elements/answer/styles';
import { Input, RadioButton } from 'components/ui';

const Answer = ({ answerType, ...props }: TAnswerProps) => {
  const [answer, setAnswer] = useState('');

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
          <RadioButton
            label="Multichoice Answer"
            value={answer}
            onClick={(multichoice) => setAnswer(String(multichoice))}
          />
        </AnswerArea>
      )}
      {answerType === 'multiselect' && (
        <AnswerArea>
          <Input
            type="select"
            placeholder="Multiselect Answer"
            value={answer}
            onValue={(multiselect) => setAnswer(multiselect)}
          />
        </AnswerArea>
      )}
    </AnswerMain>
  );
};

export default Answer;
