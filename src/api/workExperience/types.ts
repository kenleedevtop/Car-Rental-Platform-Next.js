export type TAddWorkExperience = {
  jobTitle: string;
  company: string;
  location: string;
  from: string;
  to: string;
  ownerId: number;
  stillWorkHere: boolean;
  roleDescription: string;
};

export type TSingleWorkExperience = {
  id: number;
};

export type TWorkExperience = {
  id: number;
  jobTitle: string;
  company: string;
  from: string;
  to: string;
  stillWorkHere: boolean;
  location: string;
  roleDescription: string;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
};
