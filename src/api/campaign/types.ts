export type TCampaign = {
  budget: number;
  name: string;
  clientId: number;
  currencyId: number;
  stakeholderTypes: Array<number>;
  strugglesIds: Array<number>;
  locationId: number;
  languageId: number;
  ethnicityIds: Array<number>;
  interestIds: Array<number>;
  productId: number;
  dateStart: string;
  dateEnd: string;
  description: string;
  influencerCount: number;
  influencerSizeId: number;
  ageMin: number;
  ageMax: number;
  genderIds: Array<number>;
  targetAudienceDescription: string;
  socialPlatformId: number;
  postType: number;
  exampleImageUrls: Array<string>;
  clientCompanyWebsite: string;
  instructions: string;
  reportId: number;
};

export type TSingleCampaign = {
  id: number;
};

export type TSubmissionLinkForCampaign = {
  submissionLink: string;
};

export type TReport = {
  budget: number;
  reportType: number;
  description: string;
  reach: boolean;
  numOfLikes: boolean;
  numOfComments: boolean;
  websiteClicks: boolean;
  engagement: boolean;
  costPerClick: boolean;
  costPerLike: boolean;
  costPerComment: boolean;
  costPerEngagement: boolean;
  overlap: boolean;
};

export type TReportId = {
  reportId: number;
};
