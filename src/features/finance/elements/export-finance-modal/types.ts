import React from 'react';

export type TApplyModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  refresh: () => void;
  carId: number;
  carName: string;
  availableShares : number | null;
  sharePrice : number | null;
};

export type TExportFinanceModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};
