import React from 'react';

export type TNotificationStatus = 'seen' | 'unseen';
export type TNotificationVariantType = 'error' | 'success' | 'info';

export type TNotificationData = {
  description: string;
  title: string;
  variant: TNotificationVariantType;
};

export type TNotification = {
  id: string | number;
  notification: TNotificationData;
  createdAt?: string;
};

export type TNotificationsCardProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => {};
};
