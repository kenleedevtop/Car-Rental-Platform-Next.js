import { ICar } from 'api/cars/types';
import { IShare } from 'api/shares/types';
import { IUser } from 'api/users/types';

export type TCreateAsBookingParams = {
  carId: number;
  from: string;
  to: string;
};

export interface IBooking {
  id: number;
  from: string;
  to: string;
  status: string;
  ownerId: number | null;
  owner: IUser;
  carId: number | null;
  car: ICar;
  shareId: number | null;
  share: IShare;
  createdAt: string;
  updatedAt: string;
}
