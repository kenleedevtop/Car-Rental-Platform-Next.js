import React from 'react';

export type TQuestionType =
  | 'short'
  | 'paragraph'
  | 'multichoice'
  | 'multiselect';

export type TQuestionProps = React.HTMLAttributes<HTMLDivElement> & {
  counter: number;
  type?: TQuestionType;
};

export type TQuestionData = {
  credit: string;
  answerType: TQuestionType | null;
  isOptional: boolean;
};
