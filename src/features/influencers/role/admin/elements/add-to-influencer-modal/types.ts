import React from 'react';

export type TAddToInfluencersModalProps =
  React.HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
  };
