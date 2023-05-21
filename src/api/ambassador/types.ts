export type TRegisterAsAmbassadorParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyTitleId: string;
  invCode?: string;
  company: {
    name: string;
    companyId: string;
  };
};

export type TSingleAmbassador = {
  id: number;
};
