import React from 'react';

export type TCreateSuggestionModalProps =
  React.HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
  };
