import {
  TSurveyQuestionData,
  TSurveyQuestionType,
} from 'features/create-survey/types';

export type TQuestionProps = {
  question: TSurveyQuestionData;
  questionId: number;
  remove: (id: string) => void;
  copy: (id: string) => void;
  changeType: (value: TSurveyQuestionType) => void;
  updateQuestion: (question: Partial<TSurveyQuestionData>) => void;
};
