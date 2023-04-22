export type TAddCampaign = {
  name: string;
  productId: string;
  dateStart: string;
  dateEnd: string;
  campaignDescription: string;
  influencerCount: string;
  ageMin: string;
  ageMax: string;
  language: string;
  gender: string;
  targetAudienceDescription: string;
  socialPlatformId: string;
  postType: string;
  imageExampleUrl: string;
  clientCompanyWebsite: string;
  instructionsDescription: string;
  contract: string;
  isContractApproved: boolean;
  status: string;
};

export type TSingleCampaign = {
  id: string;
};
