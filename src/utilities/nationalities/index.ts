import { DCountries } from 'features/users/data';

export const getNationalities = (search: string) => {
  let countries: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DCountries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    filters = DCountries.slice(0, 10);
  }
  filters.forEach((element) => {
    const country = element.name;
    countries.push(country);
  });
  countries.sort();
  if (countries.length > 0) {
    countries = countries.slice(0, 10);
  }
  return countries;
};
