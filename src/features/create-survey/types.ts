export type TSurveyQuestionType =
  | 'short'
  | 'paragraph'
  | 'multichoice'
  | 'multiselect';

export type TSurveyQuestionBaseType = {
  id: string;
  credit: string;
  optional: boolean;
  question: string;
};

export type TSurveyQuestionShortType = TSurveyQuestionBaseType & {
  type: 'short';
};

export type TSurveyQuestionParagraphType = TSurveyQuestionBaseType & {
  type: 'paragraph';
};

export type TSurveyQuestionMultichoiceType = TSurveyQuestionBaseType & {
  type: 'multichoice';
  answers: Array<{
    id: string;
    value: string;
  }>;
  hasOther: boolean;
};

export type TSurveyQuestionMultiselectType = TSurveyQuestionBaseType & {
  type: 'multiselect';
  answers: Array<{
    id: string;
    value: string;
  }>;
  hasOther: boolean;
};

export type TSurveyQuestionData =
  | TSurveyQuestionShortType
  | TSurveyQuestionParagraphType
  | TSurveyQuestionMultichoiceType
  | TSurveyQuestionMultiselectType;

export type TSurveyQuestionUpdateData =
  | Partial<TSurveyQuestionShortType>
  | Partial<TSurveyQuestionParagraphType>
  | Partial<TSurveyQuestionMultichoiceType>
  | Partial<TSurveyQuestionMultiselectType>;
