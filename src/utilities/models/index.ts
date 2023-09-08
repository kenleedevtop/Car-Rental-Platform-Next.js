import { DModels } from 'features/opportunities/data';

export const getModels = (search: string) => {
  let models: string[] = [];
  DModels.forEach((element) => {
    const model = element.name;
    const types = element.types;
    types.forEach((type) => {
      let locat = `${model}: ${type}`;
      models.push(locat);
    });
  });
  models.sort();
  return models;
};
