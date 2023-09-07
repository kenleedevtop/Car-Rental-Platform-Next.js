import React from 'react';
import { TNotificationData } from '../../types';

export type TNotificationProps = React.HTMLAttributes<HTMLDivElement> & {
  notification: TNotificationData;
  createdAt?: string;
};
