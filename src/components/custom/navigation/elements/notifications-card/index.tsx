import React from 'react';
import { NotificationsCardList } from 'components/custom/navigation/elements/notifications-card/styles';

import {
  Notification,
  NotificationSettings,
} from 'components/custom/navigation/elements/notifications-card/elements';
import { DNotifications } from 'components/custom/notifications-card/data';
import { TNotificationsCardProps } from 'components/custom/navigation/elements/notifications-card/types';
import { useAppContext } from 'context';
import { useModal } from 'hooks';
import { Modal } from 'components/custom';

const NotificationsCard = ({ onClose, ...props }: TNotificationsCardProps) => {
  const { role } = useAppContext();

  return (
    <Modal size="small" title={<>Notifications</>} onClose={onClose} {...props}>
      {['ADMIN', 'SUPERADMIN'].includes(role) && (
        <NotificationsCardList>
          {DNotifications.map(({ id, ...x }) => (
            <Notification key={id} {...x} />
          ))}
        </NotificationsCardList>
      )}
      {['INFLUENCER', 'DEVELOPER', 'INVESTOR'].includes(role) && (
        <NotificationsCardList>
          {DNotifications.map(({ id, ...x }) => (
            <Notification key={id} {...x} />
          ))}
        </NotificationsCardList>
      )}
    </Modal>
  );
};

export default NotificationsCard;
