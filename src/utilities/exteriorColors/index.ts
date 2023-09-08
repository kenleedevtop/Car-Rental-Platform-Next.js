import { DExteriorColor } from 'features/opportunities/data';

export const getExteriorColors = (search: string) => {
  let exteriorColors: string[] = [];
  DExteriorColor.forEach((element) => {
    const interest = element.name;
    exteriorColors.push(interest);
  });
  exteriorColors.sort();
  return exteriorColors;
};
