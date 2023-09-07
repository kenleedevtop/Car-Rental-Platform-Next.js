import { DJobTitle } from 'features/users/data';

export const getJobTitles = (search: string) => {
  let jobTitles: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DJobTitle.filter((title) =>
      title.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    if (DJobTitle.length > 10) {
      filters = DJobTitle.slice(0, 10);
    } else {
      filters = DJobTitle;
    }
  }
  DJobTitle.forEach((element) => {
    const title = element.name;
    jobTitles.push(title);
  });
  jobTitles.sort();
  // if (jobTitles.length > 0) {
  //   jobTitles = jobTitles.slice(0, 10);
  // }
  return jobTitles;
};
