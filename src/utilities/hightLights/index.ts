import { DHightLights } from 'features/opportunities/data';

export const getHightLight = (search: string) => {
  let highlights: string[] = [];
  DHightLights.forEach((element) => {
    const hightlight = element.name;
    highlights.push(hightlight);
  });
  highlights.sort();
  return highlights;
};
