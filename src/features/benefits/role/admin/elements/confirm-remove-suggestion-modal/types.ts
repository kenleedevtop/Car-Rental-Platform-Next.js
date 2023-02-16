import React from 'react';

export type TConfirmRemoveSuggestionModalProps =
  React.HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
  };
