import React from 'react';

export type TNotificationStatus = 'seen' | 'unseen';
export type TNotificationVariantType =
  | 'error'
  | 'success'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'warning';

export type TNotificationData = {
  id: number;
  description: string;
  title: string;
  variant: TNotificationVariantType;
};

export type TNotification = {
  id: number;
  notification: TNotificationData;
  createdAt?: string;
};

export type TNotificationsCardProps = React.HTMLAttributes<HTMLDivElement> & {};
