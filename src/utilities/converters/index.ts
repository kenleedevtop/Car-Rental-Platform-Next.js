import { DCountries } from 'features/users/data';
import { TUserRole } from 'types/global';

export const convertNumberToRole = (roleId: number): TUserRole => {
  const roles: TUserRole[] = ['ADMIN', 'USER'];

  return roles[roleId];
};

export const convertLocationToFlag = (location: string): string => {
  var str_array = location.split(', ');
  const country = str_array.pop();
  let flag = '';
  DCountries.forEach((item) => {
    if (item.name === country) {
      flag = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${item.code}.svg`;
    }
  });
  return flag;
};
