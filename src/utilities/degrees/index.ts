import { DDegrees } from 'features/users/data';

export const getDegrees = (search: string) => {
  let degrees: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DDegrees.filter((degree) =>
      degree.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    if (DDegrees.length > 10) {
      filters = DDegrees.slice(0, 10);
    } else {
      filters = DDegrees;
    }
  }
  DDegrees.forEach((element) => {
    const degree = element.name;
    degrees.push(degree);
  });
  degrees.sort();
  // if (degrees.length > 0) {
  //   degrees = degrees.slice(0, 10);
  // }
  return degrees;
};
