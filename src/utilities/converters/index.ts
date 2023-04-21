import { TUserRole } from 'types/global';

export const convertNumberToRole = (roleId: number): TUserRole => {
  const roles: TUserRole[] = [
    'SUPERADMIN',
    'ADMIN',
    'AMBASSADOR',
    'CLIENT',
    'INFLUENCER',
  ];

  return roles[roleId];
};
