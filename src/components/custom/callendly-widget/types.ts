import React from 'react';

export type TCalendlyProps = React.HTMLAttributes<HTMLDivElement> & {
  onScheduled: () => void;
  shareCount : number | null;
  name : string;
  email : string;
};
