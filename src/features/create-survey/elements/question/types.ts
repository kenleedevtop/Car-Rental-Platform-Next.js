import React from 'react';

export type TQuestionType =
  | 'short'
  | 'paragraph'
  | 'multichoice'
  | 'multiselect';

export type TQuestionBaseType = {
  id: string;
  credit: number;
  optional: boolean;
};

export type TQuestionShortType = TQuestionBaseType & {
  type: 'short';
  answer: string;
};

export type TQuestionParagraphType = TQuestionBaseType & {
  type: 'paragraph';
  answer: string;
};

export type TQuestionMultichoiceType = TQuestionBaseType & {
  type: 'multichoice';
  answers: Array<{
    id: string;
    value: string;
    isLast: boolean;
    hasOther: boolean;
  }>;
  answer?: string;
};

export type TQuestionMultiselectType = TQuestionBaseType & {
  type: 'multiselect';
  answers: Array<{
    id: string;
    value: string;
    isLast: boolean;
    hasOther: boolean;
  }>;
  answer?: string;
};

export type TQuestionData =
  | TQuestionShortType
  | TQuestionParagraphType
  | TQuestionMultichoiceType
  | TQuestionMultiselectType;

export type TQuestionProps = {
  question: TQuestionData;
  questionId: number;
  remove: (id: string) => void;
  changeOptional: (id: string) => void;
  changeCredit: (id: string, value: number) => void;
  changeType: (id: string, value: TQuestionType) => void;
  copy: (id: string) => void;
  addAnswer: (id: string) => void;
  addOther: (id: string) => void;
};
