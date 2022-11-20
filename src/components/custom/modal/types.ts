import React, { ReactNode } from 'react';

export type TModalSize = 'small' | 'medium' | 'large';

export type TModalProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: () => void;
  size?: TModalSize;
  actions?: Array<ReactNode>;
};
