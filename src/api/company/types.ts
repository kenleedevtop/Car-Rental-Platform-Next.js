export type TCreateCompany = {
  isCommon: boolean;
  isApproved: boolean;
  name: string;
  createByUserId: number;
};

export type TCreateCompanyTitle = {
  name: string;
};

export type TSingleCompany = {
  id: string;
};

export type TSingleCompanyTitle = {
  id: string;
};
