import React, { useEffect, useState } from 'react';
import {
  NotificationsCardMain,
  NotificationsCardList,
} from 'components/custom/notifications-card/styles';

import { Notification } from 'components/custom/notifications-card/elements';
import {
  TNotification,
  TNotificationsCardProps,
} from 'components/custom/notifications-card/types';
import { useAppContext } from 'context';
import io from 'socket.io-client';
import Project from 'constants/project';
import { NotificationAPI } from 'api';

const NotificationsCard = ({ ...props }: TNotificationsCardProps) => {
  const {
    role,
    houseStatus,
    handleCarStatus,
    userStatus,
    handleUserStatus,
    applicationStatus,
    handleApplicationStatus,
    notificationStatus,
    handleNotificationStatus,
    getMeData,
  } = useAppContext();
  const [notifications, setNotifications] = useState<TNotification[]>([]);
  const [connected, setConnected] = useState<boolean>(false);

  const getNotifications = async () => {
    try {
      const notificationData = await NotificationAPI.getNotificationsForMe();
      setNotifications([...notificationData]);
    } catch (error) {}
  };

  let socket;
  const connectionObject = {
    withCredentials: true,
  };

  const changeCarStatus = () => {
    const newStatus = houseStatus + 1;
    handleCarStatus(newStatus);
  };

  const changeApplicationStatus = () => {
    const newStatus = applicationStatus + 1;
    handleApplicationStatus(newStatus);
  };

  const changeUserStatus = () => {
    const newStatus = userStatus + 1;
    handleUserStatus(newStatus);
  };

  const changeNotificationStatus = () => {
    const newStatus = notificationStatus + 1;
    handleNotificationStatus(newStatus);
    getNotifications();
  };

  const handleTokenBalance = () => {
    getMeData();
  };

  const socketInitializer = async () => {
    if (connected) return;
    try {
      socket = io(`${Project.websocketApi.v1}/`, connectionObject);
      socket.on('connect', () => {
        setConnected(true);
      });
      socket.on('UserWelcomeRegistered', (msg) => {
        changeNotificationStatus();
      });

      socket.on('UserAccountActivated', (msg) => {
        changeNotificationStatus();
      });

      socket.on('UserShareBalanceChanged', (msg) => {
        changeNotificationStatus();
        handleTokenBalance();
      });

      socket.on('UserNewSuperCarListed', (msg) => {
        changeNotificationStatus();
        changeCarStatus();
      });

      socket.on('UserSuperCarStatusChanged', (msg) => {
        changeNotificationStatus();
      });

      socket.on('UserCarMarketTypeChanged', (msg) => {
        changeNotificationStatus();
      });

      socket.on('UserSuperCarInfoChanged', (msg) => {
        changeCarStatus();
      });

      socket.on('UserApplicationReceived', (msg) => {
        changeNotificationStatus();
        changeApplicationStatus();
      });

      socket.on('UserApplicationAccepted', (msg) => {
        changeNotificationStatus();
        changeApplicationStatus();
      });
      socket.on('UserApplicationInReview', (msg) => {
        changeNotificationStatus();
        changeApplicationStatus();
      });
      socket.on('UserApplicationDeclined', (msg) => {
        changeNotificationStatus();
        changeApplicationStatus();
      });

      socket.on('AdminUserRegistered', (msg) => {
        changeNotificationStatus();
        changeUserStatus();
      });

      socket.on('AdminUserVerified', (msg) => {
        changeNotificationStatus();
        changeUserStatus();
      });

      socket.on('AdminUserTokenPurchased', (msg) => {
        changeNotificationStatus();
      });

      socket.on('AdminUserApplicationSent', (msg) => {
        changeNotificationStatus();
        changeApplicationStatus();
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socketInitializer();
    getNotifications();
  }, []);

  return (
    <>
      {['ADMIN', 'USER'].includes(role) && (
        <NotificationsCardMain title="Notifications" {...props}>
          <NotificationsCardList>
            {notifications.map(({ id, ...x }, index: any) => (
              <Notification key={index} {...x} />
            ))}
          </NotificationsCardList>
        </NotificationsCardMain>
      )}
    </>
  );
};

export default NotificationsCard;
