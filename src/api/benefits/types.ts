export type TAddBenefit = {
  benefitsPartnershipId: string;
  benefitCompanyLink: string;
  description: string;
  benefitCategoryId: string;
  benefitLocations: Array<string>;
};

export type TSingleBenefit = {
  id: string;
};
