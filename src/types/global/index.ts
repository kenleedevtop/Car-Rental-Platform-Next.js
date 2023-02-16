export type TUserRole = 'CLIENT' | 'INFLUENCER' | 'AMBASSADOR' | 'ADMIN';

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: Array<TUserRole>;
};
