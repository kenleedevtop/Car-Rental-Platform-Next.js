import { DLocations } from 'features/users/data';

export const getLocations = (search: string) => {
  let locations: string[] = [];
  DLocations.forEach((element) => {
    const country = element.name;
    const cities = element.cities;
    cities.forEach((city) => {
      let locat = `${city}, ${country}`;
      locations.push(locat);
    });
  });
  if (search) {
    let filterd = locations.filter((location) =>
      location.toLowerCase().includes(search.toLowerCase())
    );
    if (filterd.length > 0) {
      filterd = filterd.slice(0, 10);
    }
    return filterd;
  }
  return locations.slice(0, 10);
};
