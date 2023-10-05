import { DLocations } from 'features/users/data';

type LocationType = {
  city: string;
  country: string;
  searchValue: string;
}

export const getLocations = (search: string) => {
  let locations: LocationType[] = [];
  DLocations.forEach((element) => {
    const country = element.name;
    const cities = element.cities;
    locations.push({
      city: '',
      country,
      searchValue: country,
    });
    cities.forEach((city) => {
      let locat = {
        city,
        country,
        searchValue: city,
      }
      locations.push(locat);
    });
  });
  if (search) {
    let filterd = locations.filter((location) =>
      location.searchValue.toLowerCase().includes(search.toLowerCase())
    ).map(lvalue => {
      if (lvalue.city === '') return lvalue.country;
      return `${lvalue.city}, ${lvalue.country}`;
    });
    return filterd.sort().slice(0, 10);
  }

  return [
    'Å, Chad',
    'Å, Norway',
    'Å, Syrian Arab Republic',
    'Aabenraa, Denmark',
    'Aabybro, Denmark',
    'Aachen, Germany',
    'Aadorf, Switzerland',
    'Aa en Hunze, Netherlands',
    'Aakirkeby, Denmark',
    'Aakre, Estonia'
  ]
};
