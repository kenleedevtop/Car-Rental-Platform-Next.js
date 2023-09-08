import { DBrands } from 'features/opportunities/data';

export const getBrands = (search: string) => {
  let models: string[] = [];
  DBrands.forEach((element) => {
    const theme = element.name;
    models.push(theme);
  });
  models.sort();
  return models;
};
