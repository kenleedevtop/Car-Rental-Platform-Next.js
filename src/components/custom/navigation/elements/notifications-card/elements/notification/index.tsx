import React from 'react';

import {
  NotificationMain,
  NotificationContent,
  NotificationStatus,
  NotificationText,
  NotificationDate,
} from 'components/custom/notifications-card/elements/notification/styles';
import { TNotificationProps } from 'components/custom/notifications-card/elements/notification/types';
import { format } from 'date-fns';

const Notification = ({
  notification,
  createdAt,
  ...props
}: TNotificationProps) => (
  <NotificationMain {...props}>
    <NotificationContent>
      <NotificationStatus variant={notification.variant} />
      <NotificationText> {notification.description} </NotificationText>
    </NotificationContent>
    <NotificationDate>
      {createdAt ? format(new Date(createdAt), 'MMM dd, yyyy | h:mm a') : null}
    </NotificationDate>
  </NotificationMain>
);

export default Notification;
