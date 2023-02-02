import React from 'react';

export type TConfirmChangeBenefitModalProps =
  React.HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
  };
