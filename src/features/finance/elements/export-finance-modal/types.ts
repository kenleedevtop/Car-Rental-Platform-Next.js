import React from 'react';

export type TApplyModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  carId: number;
  carName: string;
  refresh: () => void;
  availableShares: number | null;
  sharePrice: number | null;
  totalShares: number | null;
  startDate: string;
};

export type TExportFinanceModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};
