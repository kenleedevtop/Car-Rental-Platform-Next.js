import { ICar } from 'api/cars/types';
import { IUser } from 'api/users/types';

export type TCreateAsApplicationParams = {
  carId: number;
  carName: string;
  sharesCount: number;
};

export type TSingleApplication = {
  id: number;
};

export interface IApplication {
  id: number;
  status: string;
  ownerId: number | null;
  carId: number | null;
  sharesCount : number | null;
  car: ICar;
  owner: IUser;
  createdAt: string;
  updatedAt: string;
}
