import { ICar } from 'api/cars/types';
import { IUser } from 'api/users/types';

export type TCreateAsBookingParams = {
  carId: number;
  from: string;
  to: string;
};

export type TSingleApplication = {
  id: number;
};

export interface IBooking {
  id: number;
  status: string;
  ownerId: number | null;
  carId: number | null;
  car: ICar;
  owner: IUser;
  createdAt: string;
  updatedAt: string;
}
