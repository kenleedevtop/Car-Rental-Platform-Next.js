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
