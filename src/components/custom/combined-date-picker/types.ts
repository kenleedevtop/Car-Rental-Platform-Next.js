import React from 'react';

export type TCombinedDatePickerProps = React.HTMLAttributes<HTMLDivElement> & {
  value: any;
  onValue: (v: any) => void;
  label: string;
};
