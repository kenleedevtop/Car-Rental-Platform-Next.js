import { IApplication } from 'api/applications/types';
import { TCarPreference } from 'api/supercarPreference/types';
import { ICar } from 'api/cars/types';

export type TCreateUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  locationId: string;
  role: string;
  status: string;
  isDeleted: boolean;
  currency: string;
  createAt: string;
  updatedAt: string;
};

export type TSingleUser = {
  id: string;
};

export type TAddComment = {
  comment: string;
};

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  profileImageUrl: string;
  location: string;
  applicationCount: number;
  shareCount: number;
  carCount: number;
  applications: IApplication[];
  preference: TCarPreference[];
  cars: ICar[];
  invested: number;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}
