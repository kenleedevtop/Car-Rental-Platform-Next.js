import { DEngineType } from 'features/opportunities/data';

export const getEngineTypes = (search: string) => {
  let engineTypes: string[] = [];
  DEngineType.forEach((element) => {
    const diet = element.name;
    engineTypes.push(diet);
  });
  engineTypes.sort();
  return engineTypes;
};
