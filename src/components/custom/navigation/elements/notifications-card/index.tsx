import React, { useState } from 'react';
import {
  NotificationsCardList,
  NotificationsCardMain,
} from 'components/custom/navigation/elements/notifications-card/styles';

import { Notification } from 'components/custom/navigation/elements/notifications-card/elements';
import { TNotificationsCardProps } from 'components/custom/navigation/elements/notifications-card/types';
import { useAppContext } from 'context';
import { Modal } from 'components/custom';
import { TNotification } from 'components/custom/notifications-card/types';
import { NotificationAPI } from 'api';

const NotificationsCard = ({ onClose, ...props }: TNotificationsCardProps) => {
  const { role } = useAppContext();
  const [notifications, setNotifications] = useState<TNotification[]>([]);

  const getNotifications = async () => {
    const notificationData = await NotificationAPI.getNotificationsForMe();
    console.log(notificationData);
    setNotifications(notificationData);
  };
  return (
    <Modal size="small" title={<>Notifications</>} onClose={onClose} {...props}>
      <NotificationsCardMain>
        {['ADMIN', 'SUPERADMIN'].includes(role) && (
          <NotificationsCardList>
            {notifications.map(({ id, ...x }) => (
              <Notification key={id} {...x} />
            ))}
          </NotificationsCardList>
        )}
        {['USER', 'DEVELOPER', 'INVESTOR'].includes(role) && (
          <NotificationsCardList>
            {notifications.map(({ id, ...x }) => (
              <Notification key={id} {...x} />
            ))}
          </NotificationsCardList>
        )}
      </NotificationsCardMain>
    </Modal>
  );
};

export default NotificationsCard;
