export type TRegisterAsInfluencerParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  affiliateCode?: string;
};

export type TSingleInfluencer = {
  id: number;
};

export type TInfluencer = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  locationId: number;
  currency?: number;
  gender?: number;
  dateOfBirth?: string;
  ethnicityId?: number;
  diseaseAreas?: Array<number>;
  invitedInfluencers: TAffiliatedInfluencer[];
  socialPlatforms: Array<{
    socialPlatformId: number;
    authorizationCode: string;
  }>;
  campaignDesiredIncome?: Array<{
    desiredAmount: number;
    postType: number;
  }>;
  surveyDesiredIncome?: Array<{
    desiredAmount: number;
    surveyType: number;
  }>;
};

export type TAffiliatedInfluencer = {
  id: number;
  stakeholderId: number;
  affiliateCode: string;
  gender: number;
  dateOfBirth: Date;
  userId: number;
  ethnicityId: number;
  type: number;
  createdAt: Date;
  updatedAt: Date;
  invitendByUserId: number;
  user: {
    firstName: string;
    lastName: string;
    id: number;
  };
};
