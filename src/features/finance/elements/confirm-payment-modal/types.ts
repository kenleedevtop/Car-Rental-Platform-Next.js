import React from 'react';

export type IConfirmPaymentModal = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  message: string;
};
