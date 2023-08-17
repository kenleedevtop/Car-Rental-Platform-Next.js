export type TUserRole = 'ADMIN' | 'USER';

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: Array<TUserRole>;
};
