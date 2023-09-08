import { DAmenities } from 'features/opportunities/data';

export const getAmenities = (search: string) => {
  let amenities: any[] = [];
  DAmenities.forEach((element) => {
    const skill = element.name;
    amenities.push(skill);
  });
  amenities.sort();
  return amenities;
};
