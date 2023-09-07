import { DSocialMedia } from 'features/users/data';

export const getSocialMedias = (search: string) => {
  let medias: string[] = [];
  DSocialMedia.forEach((element) => {
    const media = element.name;
    medias.push(media);
  });
  if (search) {
    let filterd = medias.filter((location) =>
      location.toLowerCase().includes(search.toLowerCase())
    );
    return filterd;
  }
  return medias;
};
