import React from 'react';

export type TChangeBenefitModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  data: any;
};
