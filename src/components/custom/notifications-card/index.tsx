import React from 'react';
import {
  NotificationsCardMain,
  NotificationsCardList,
} from 'components/custom/notifications-card/styles';

import { Notification } from 'components/custom/notifications-card/elements';
import { DNotifications } from 'components/custom/notifications-card/data';
import { TNotificationsCardProps } from 'components/custom/notifications-card/types';

const NotificationsCard = ({ ...props }: TNotificationsCardProps) => (
  <NotificationsCardMain title="Notifications" {...props}>
    <NotificationsCardList>
      {DNotifications.map(({ id, ...x }) => (
        <Notification key={id} {...x} />
      ))}
    </NotificationsCardList>
  </NotificationsCardMain>
);

export default NotificationsCard;
