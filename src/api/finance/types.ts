import { IUser } from 'api/users/types';

export type TCreateCheckoutSession = {
  quantity: number;
};

export type TConfirmTokenTransaction = {
  sessionId: string;
};

export type TSingleSkill = {
  id: number;
};

export interface ISkill {
  id: number;
  name: string;
  owner: IUser;
  createdAt: string;
  updatedAt: string;
}
