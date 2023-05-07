import React from 'react';

export type TConfirmAddBenefitModalProps =
  React.HTMLAttributes<HTMLDivElement> & {
    onClose: () => void;
    value: any;
  };
