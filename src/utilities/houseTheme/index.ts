import { DCarThemes } from 'features/opportunities/data';

export const getCarTheme = (search: string) => {
  let themes: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DCarThemes.filter((theme) =>
      theme.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    if (DCarThemes.length > 10) {
      filters = DCarThemes.slice(0, 10);
    } else {
      filters = DCarThemes;
    }
  }
  DCarThemes.forEach((element) => {
    const theme = element.name;
    themes.push(theme);
  });
  themes.sort();
  // if (themes.length > 0) {
  //   themes = themes.slice(0, 10);
  // }
  return themes;
};
