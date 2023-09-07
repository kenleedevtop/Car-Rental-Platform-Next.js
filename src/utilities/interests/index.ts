import { DInterestsAndHobbies } from 'features/users/data';

export const getInterestsAndHobbies = (search: string) => {
  let interests: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DInterestsAndHobbies.filter((interest) =>
      interest.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    if (DInterestsAndHobbies.length > 10) {
      filters = DInterestsAndHobbies.slice(0, 10);
    } else {
      filters = DInterestsAndHobbies;
    }
  }
  DInterestsAndHobbies.forEach((element) => {
    const interest = element.name;
    interests.push(interest);
  });
  interests.sort();
  // if (interests.length > 0) {
  //   interests = interests.slice(0, 10);
  // }
  return interests;
};
