import { DDiet } from 'features/users/data';

export const getDiets = (search: string) => {
  let diets: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DDiet.filter((diet) =>
      diet.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    if (DDiet.length > 10) {
      filters = DDiet.slice(0, 10);
    } else {
      filters = DDiet;
    }
  }
  DDiet.forEach((element) => {
    const diet = element.name;
    diets.push(diet);
  });
  diets.sort();
  // if (diets.length > 0) {
  //   diets = diets.slice(0, 10);
  // }
  return diets;
};
