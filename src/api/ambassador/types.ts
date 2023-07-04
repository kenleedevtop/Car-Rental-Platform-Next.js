export type TRegisterAsAmbassadorParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyTitleId: number;
  invCode?: string;
  commonLegalId: number;
  company: {
    name: string;
    companyId: number;
  };
};

export type TSingleAmbassador = {
  id: number;
};

export interface ISingleAmbassadorResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  emailResendTokens: number;
  locationId: any;
  role: number;
  status: number;
  currency: number;
  createdAt: string;
  updatedAt: string;
  ambassador: IAmbassador;
}

export interface IAmbassador {
  id: number;
  userId: number;
  companyId: number;
  companyTitleId: number;
  affiliateCode: string;
  invitedByAdminId: number;
  industryId: any;
  createdAt: string;
  updatedAt: string;
  company: ICompany;
  companyTitle: ICompanyTitle;
  industry: any;
}

export interface ICompany {
  id: number;
  name: string;
  createdByUserId: any;
  isCommon: boolean;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICompanyTitle {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
