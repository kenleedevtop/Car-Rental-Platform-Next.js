import { DInteriorStyle } from 'features/opportunities/data';
export const getInteriorStyles = (search: string) => {
  let amenities: string[] = [];

  DInteriorStyle.forEach((element) => {
    const skill = element.name;
    amenities.push(skill);
  });
  amenities.sort();
  return amenities;
};
