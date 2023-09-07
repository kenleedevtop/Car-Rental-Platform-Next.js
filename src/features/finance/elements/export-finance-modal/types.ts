import React from 'react';

export type TApplyModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  houseId: number;
  houseName: string;
};

export type TExportFinanceModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};
