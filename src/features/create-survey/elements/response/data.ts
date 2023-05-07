import { v4 } from 'uuid';
import {
  TSurveyQuestionMultichoiceType,
  TSurveyQuestionMultiselectType,
  TSurveyQuestionParagraphType,
  TSurveyQuestionShortType,
} from 'features/create-survey/types';

export const DQuestionShortConstructor = (): TSurveyQuestionShortType => ({
  id: v4(),
  credit: '',
  optional: false,
  type: 'short',
  question: '',
});
export const DQuestionParagraphConstructor =
  (): TSurveyQuestionParagraphType => ({
    id: v4(),
    credit: '',
    optional: false,
    type: 'paragraph',
    question: '',
  });
export const DQuestionMultichoiceConstructor =
  (): TSurveyQuestionMultichoiceType => ({
    id: v4(),
    credit: '',
    optional: false,
    type: 'multichoice',
    answers: [
      {
        id: v4(),
        value: '',
      },
    ],
    question: '',
    hasOther: false,
  });
export const DQuestionMultiselectConstructor =
  (): TSurveyQuestionMultiselectType => ({
    id: v4(),
    credit: '',
    optional: false,
    type: 'multiselect',
    answers: [
      {
        id: v4(),
        value: '',
      },
    ],
    question: '',
    hasOther: false,
  });
