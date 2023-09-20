import { TDocument } from 'api/documents/types';
import { TImage } from 'api/images/types';

export type TCreateCar = {
  name: string;
  location: string;
  totalShares: number | null;
  availableShares: number | null;
  sharePrice: number | null;
  address: string | null;
  mileage: string;
  year: string;
  engineType: string;
  enginePower: string;
  startDate: string;
  highLights: string | [];
  status: string;
  info: string;
  thumbnailId: number | null;
  addressId: number | null;
};
export type TCreateCarOwner = {
  userId: number;
  carId: number;
};

export type TSingleCar = {
  id: number;
};

export type TAddress = {
  id: number;
  fullAddress: string;
  postcode: string;
  city: string;
  country: string;
  gpslat: string;
  gpslong: string;
};

export interface ICar {
  id: number;
  name: string;
  location: string;
  applicationStatus : string;
  totalShares: number | null;
  availableShares: number | null;
  sharePrice: number | null;
  address: string;
  mileage: string;
  year: string;
  engineType: string;
  enginePower: string;
  startDate: string;
  highLights: string;
  status: string;
  info: string;
  thumbnailId: number | null;
  addressId: number | null;
  googleAddress: TAddress | null;
  images: TImage[];
  documents: TDocument[];
  createdAt: string;
  updatedAt: string;
}
