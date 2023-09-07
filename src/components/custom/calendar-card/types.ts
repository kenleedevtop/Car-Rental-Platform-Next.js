import React from 'react';
import { IUser } from 'api/users/types';
import { IApplication } from 'api/applications/types';
import { ICar } from 'api/cars/types';
import { TNotificationVariantType } from '../notifications-card/types';

export type TCalendarDate = {
  currentMonth: boolean;
  date: Date;
  today: boolean;
};

export type TNotificationPayload = {
  userId: null | number;
  notificationId: null | number;
  houseId: null | number;
  applicationId: null | number;
  transactionId: null | number;
  createdAt: string;
  user: IUser | null;
  application: IApplication | null;
  transaction: any;
  house: ICar | null;
};

export type TCalendarEvents = {
  title: string;
  description: string;
  variant: TNotificationVariantType;
  createdAt: string;
  notificationPayload: TNotificationPayload[];
};

export type TCalendarCardProps = React.HTMLAttributes<HTMLDivElement> & {};
