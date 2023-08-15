import { TUserRole } from 'types/global';

export const convertNumberToRole = (roleId: number): TUserRole => {
  const roles: TUserRole[] = [
    'SUPERADMIN',
    'ADMIN',
    'INVESTOR',
    'DEVELOPER',
    'INFLUENCER',
  ];

  return roles[roleId];
};
