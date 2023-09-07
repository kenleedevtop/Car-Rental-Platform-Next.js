import { DSkills } from 'features/users/data';

export const getSkillsOfOthers = (search: string) => {
  let skills: string[] = [];
  let filters: any[] = [];
  if (search) {
    filters = DSkills.filter((skill) =>
      skill.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    if (DSkills.length > 10) {
      filters = DSkills.slice(0, 10);
    } else {
      filters = DSkills;
    }
  }
  filters.forEach((element) => {
    const skill = element.name;
    skills.push(skill);
  });
  skills.sort();
  if (skills.length > 0) {
    skills = skills.slice(0, 10);
  }
  return skills;
};
