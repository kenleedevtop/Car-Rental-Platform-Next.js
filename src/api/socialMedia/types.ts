export type TCreateAsSocialMediaParams = {
  tier: string;
  houseId: number;
};

export type TSingleSocialMedia = {
  id: number;
};

export interface ISocialMedia {
  id: number;
  instagram: string | null;
  linkedin: string | null;
  tiktok: string | null;
  website: string | null;
  ownerId: number | null;
  createdAt: string;
  updatedAt: string;
}
