import { DFieldOfStudy } from 'features/users/data';

export const getFieldOfStudies = (search: string) => {
  let fields: string[] = [];
  let filters: any[] = [];

  if (search) {
    filters = DFieldOfStudy.filter((field) =>
      field.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    if (DFieldOfStudy.length > 10) {
      filters = DFieldOfStudy.slice(0, 10);
    } else {
      filters = DFieldOfStudy;
    }
  }
  DFieldOfStudy.forEach((element) => {
    const field = element.name;
    fields.push(field);
  });
  fields.sort();
  // if (fields.length > 0) {
  //   fields = fields.slice(0, 10);
  // }
  return fields;
};
