import { v4 } from 'uuid';
import {
  TQuestionMultichoiceType,
  TQuestionMultiselectType,
  TQuestionParagraphType,
  TQuestionShortType,
} from 'features/create-survey/elements/question/types';

export const DQuestionShortConstructor = (): TQuestionShortType => ({
  id: v4(),
  credit: 0,
  optional: false,
  type: 'short',
  answer: '',
});
export const DQuestionParagraphConstructor = (): TQuestionParagraphType => ({
  id: v4(),
  credit: 0,
  optional: false,
  type: 'paragraph',
  answer: '',
});
export const DQuestionMultichoiceConstructor =
  (): TQuestionMultichoiceType => ({
    id: v4(),
    credit: 0,
    optional: false,
    type: 'multichoice',
    answers: [
      {
        id: v4(),
        value: '',
        isLast: false,
        hasOther: false,
      },
    ],
    answer: '',
  });
export const DQuestionMultiselectConstructor =
  (): TQuestionMultiselectType => ({
    id: v4(),
    credit: 0,
    optional: false,
    type: 'multiselect',
    answers: [
      {
        id: v4(),
        value: '',
        isLast: false,
        hasOther: false,
      },
    ],
    answer: '',
  });
