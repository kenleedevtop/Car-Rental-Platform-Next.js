import React from 'react';
import { NotificationsCardList } from 'components/custom/navigation/elements/notifications-card/styles';

import {
  Notification,
  NotificationSettings,
} from 'components/custom/navigation/elements/notifications-card/elements';
import { DNotifications } from 'components/custom/notifications-card/data';
import { TNotificationsCardProps } from 'components/custom/navigation/elements/notifications-card/types';
import { useAppContext } from 'context';
import { SettingsIcon } from 'components/svg';
import { useModal } from 'hooks';
import { Modal } from 'components/custom';

const NotificationsCard = ({ onClose, ...props }: TNotificationsCardProps) => {
  const { role } = useAppContext();

  const [nModal, openNModal, closeNModal] = useModal(false);

  return (
    <Modal
      size="small"
      title={
        <>
          Notifications <SettingsIcon onClick={openNModal} />
        </>
      }
      onClose={onClose}
      {...props}
    >
      {['ADMIN', 'SUPERADMIN'].includes(role) && (
        <NotificationsCardList>
          {DNotifications.map(({ id, ...x }) => (
            <Notification key={id} {...x} />
          ))}
        </NotificationsCardList>
      )}
      {['INFLUENCER', 'CLIENT', 'AMBASSADOR'].includes(role) && (
        <NotificationsCardList>
          {DNotifications.map(({ id, ...x }) => (
            <Notification key={id} {...x} />
          ))}
        </NotificationsCardList>
      )}
      {nModal && <NotificationSettings onClose={closeNModal} />}
    </Modal>
  );
};

export default NotificationsCard;
