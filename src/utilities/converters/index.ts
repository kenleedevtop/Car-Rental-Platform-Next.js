import { TUserRole } from 'types/global';

export const convertNumberToRole = (roleId: number): TUserRole => {
  const roles: TUserRole[] = ['ADMIN', 'USER'];

  return roles[roleId];
};
