import { TDocument } from 'api/documents/types';
import { TImage } from 'api/images/types';
import { IUser } from 'api/users/types';

export type TCreateCar = {
  name: string;
  location: string;
  totalSpots: number | null;
  availableSpots: number | null;
  rent: number | null;
  theme: string;
  info: string;
  status: string;
  marketType: string;
  thumbnailId: number | null;
};

export type TSingleCar = {
  id: number;
};

export interface ICar {
  id: number;
  name: string;
  location: string;
  totalSpots: number | null;
  availableSpots: number | null;
  rent: number | null;
  theme: string;
  info: any;
  status: string;
  marketType: string;
  assignee: IUser | null;
  thumbnailId: number | null;
  images: TImage[];
  documents: TDocument[];
  createdAt: string;
  updatedAt: string;
}
