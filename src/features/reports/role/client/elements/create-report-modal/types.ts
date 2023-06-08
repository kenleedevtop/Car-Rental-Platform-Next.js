import React from 'react';

export type TAddReportModalProps = React.HTMLAttributes<HTMLDivElement> & {
  refresh: () => void;
  onClose: () => void;
};
