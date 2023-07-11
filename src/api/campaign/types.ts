export type TUpdateCampaign = {
  budget?: number;
  status?: number;
  name?: string;
  clientId?: number;
  currencyId?: number;
  diseaseAreaIds?: number[];
  stakeholderTypes?: number[];
  struggleIds?: number[];
  symptomIds?: number[];
  locationIds?: number[];
  languages?: number[];
  ethnicityIds?: number[];
  interestIds?: number[];
  productIds?: number[];
  dateStart?: Date;
  dateEnd?: Date;
  description?: string;
  influencersCount?: number;
  influencersSizeIds?: number[];
  ageMin?: number;
  ageMax?: number;
  genders?: number[];
  targetAudienceDescription?: string;
  socialPlatformId?: number;
  postType?: number;
  exampleImageUrls?: string[];
  clientCompanyWebsite?: string;
  instructions?: string;
  report?: number;
};

export type TCampaign = {
  id?: number;
  name?: string;
  platformProductOrderId?: number;
  dateStart?: null;
  dateEnd?: null;
  description?: string;
  influencersCount?: number;
  ageMin?: number;
  ageMax?: number;
  targetAudienceDescription?: string;
  socialPlatformId?: number;
  postType?: PostType;
  clientCompanyWebsite?: null;
  instructions?: null;
  contract?: null;
  isContractApproved?: boolean;
  report?: PostType;
  createdAt?: Date;
  updatedAt?: Date;
  campaignInfluencersSizes?: CampaignInfluencersSize[];
  products?: ProductElement[];
  stakeholderTypes?: PostType[];
  exampleImages?: any[];
  platformProductOrder?: PlatformProductOrder;
};

export type CampaignInfluencersSize = {
  influencerSize?: InfluencerSize;
  influencerSizeId?: number;
};

export type InfluencerSize = {
  id?: number;
  name?: string;
  from?: number;
  to?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PlatformProductOrder = {
  id?: number;
  clientId?: number;
  platformProduct?: number;
  ambassadorCommission?: number;
  budget?: number;
  currencyId?: number;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;
  client?: Client;
  currency?: Currency;
  platformProductOrderDiseaseAreas?: PlatformProductOrderDiseaseArea[];
  platformProductOrderEthnicities?: PlatformProductOrderEthnicity[];
  platformProductOrderGenders?: PostType[];
  platformProductOrderLanguages?: PostType[];
  platformProductOrderInterests?: PlatformProductOrderInterest[];
  platformProductOrderLocations?: PlatformProductOrderLocation[];
  platformProductOrderStruggles?: PlatformProductOrderStruggle[];
  platformProductOrderSymptoms?: PlatformProductOrderSymptom[];
  platformProductOrderLabels?: any[];
  platformProductOrderInfluencers?: any[];
};

export type Client = {
  id?: number;
  userId?: number;
  companyId?: number;
  companyTitleId?: number;
  industryId?: null;
  ambassadorId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  user?: User;
  company?: Company;
  ambassador?: Ambassador;
};

export type Ambassador = {
  id?: number;
  userId?: number;
  companyId?: number;
  companyTitleId?: number;
  affiliateCode?: string;
  invitedByAdminId?: number;
  industryId?: null;
  createdAt?: Date;
  updatedAt?: Date;
  user?: User;
};

export type User = {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type Company = {
  id?: number;
  name?: string;
  createdByUserId?: null;
  isCommon?: boolean;
  isApproved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Currency = {
  id?: number;
  code?: string;
};

export type PlatformProductOrderDiseaseArea = {
  diseaseArea?: DiseaseArea;
};

export type DiseaseArea = {
  id?: number;
  name?: string;
  isCommon?: boolean;
  parentDiseaseAreaId?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PlatformProductOrderEthnicity = {
  ethnicity?: Ethnicity;
};

export type Ethnicity = {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostType = {
  name?: string;
  value?: number;
};

export type PlatformProductOrderInterest = {
  interest?: Ethnicity;
};

export type PlatformProductOrderLocation = {
  location?: Location;
};

export type Location = {
  id?: number;
  name?: string;
  isCommon?: boolean;
  countryId?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  country?: Location;
};

export type PlatformProductOrderStruggle = {
  struggle?: Ethnicity;
};

export type PlatformProductOrderSymptom = {
  symptom?: Ethnicity;
};

export type ProductElement = {
  product?: ProductProduct;
};

export type ProductProduct = {
  id?: number;
  name?: string;
  genericName?: string;
  createdByClientId?: null;
  isApproved?: boolean;
  isBranded?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
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
