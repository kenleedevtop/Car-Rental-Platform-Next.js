import React from 'react';

export type TConfirmRemoveBenefitModalProps =
  React.HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
  };
