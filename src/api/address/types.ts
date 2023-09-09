export type TAddEducation = {
  university: string;
  degree: string;
  fieldOfStudy: string;
  from: string;
  to: string;
  overAllGPA: number;
};

export type TSingleEducation = {
  id: number;
};

export type TEducation = {
  id: number;
  university: string;
  degree: string;
  fieldOfStudy: string;
  from: string;
  to: string;
  overAllGPA: number;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
};
