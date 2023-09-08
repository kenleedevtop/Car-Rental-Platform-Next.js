import { DCondition } from 'features/opportunities/data';

export const getConditions = (search: string) => {
  let countries: string[] = [];
  DCondition.forEach((element) => {
    const country = element.name;
    countries.push(country);
  });
  countries.sort();
  return countries;
};
