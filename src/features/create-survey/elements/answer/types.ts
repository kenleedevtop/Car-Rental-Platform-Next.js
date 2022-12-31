import React from 'react';

export type TAnswerProps = React.HTMLAttributes<HTMLDivElement> & {
  answerType: 'short' | 'paragraph' | 'multichoice' | 'multiselect' | null;
  questionId: string;
  isLast: boolean;
  hasOther: boolean;
  add: (id: string) => void;
  addOther: (id: string) => void;
};
