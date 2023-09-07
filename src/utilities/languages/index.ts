import { DCountries } from 'features/users/data';

export const getLanguages = (search: string) => {
  let languages: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DCountries.filter((country) =>
      country.language.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    filters = DCountries.slice(0, 10);
  }
  filters.forEach((element) => {
    const language = element.language.name;
    if (!languages.includes(language)) languages.push(language);
  });
  languages.sort();
  if (languages.length > 0) {
    languages = languages.slice(0, 10);
  }
  return languages;
};
