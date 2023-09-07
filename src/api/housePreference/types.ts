import { IUser } from 'api/users/types';

export type TAddCarPreference = {
  theme: string;
  skillsOfOthers: string;
  location: string;
  language: string;
  monthlyRentMax: number;
  monthlyRentMin: number;
  ageMax: number;
  ageMin: number;
  tenantsMax: number;
  tenantsMin: number;
  interestsHobbies: string;
  diet: string;
  motivation: string;
};

export type TSingleCarPreference = {
  id: number;
};

export type TCarPreference = {
  id: number;
  theme: string;
  skillsOfOthers: string;
  location: string;
  language: string;
  monthlyRentMax: number;
  monthlyRentMin: number;
  ageMax: number;
  ageMin: number;
  tenantsMax: number;
  tenantsMin: number;
  interestsHobbies: string;
  diet: string;
  motivation: string;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
};
