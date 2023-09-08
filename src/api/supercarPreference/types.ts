export type TAddCarPreference = {
  brands: string;
  models: string;
  location: string;
  conditions: string;
  amenities: string;
  budgetPerShareMin: number;
  budgetPerShareMax: number;
  interestedInSupercars: string;
  interestedInShares: string;
  interiorStyle: string;
  exteriorColor: string;
  engineType: string;
  engineHpMax: string;
  engineHpMin: string;
  additionalComment: string;
};

export type TSingleCarPreference = {
  id: number;
};

export type TCarPreference = {
  id: number;
  brands: string;
  models: string;
  location: string;
  conditions: string;
  amenities: string;
  budgetPerShareMin: number;
  budgetPerShareMax: number;
  interestedInSupercars: string;
  interestedInShares: string;
  interiorStyle: string;
  exteriorColor: string;
  engineType: string;
  engineHpMax: string;
  engineHpMin: string;
  additionalComment: string;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
};
