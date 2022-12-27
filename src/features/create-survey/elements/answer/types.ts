import React from 'react';

export type TAnswerProps = React.HTMLAttributes<HTMLDivElement> & {
  answerType: 'short' | 'paragraph' | 'multichoice' | 'multiselect';
};
