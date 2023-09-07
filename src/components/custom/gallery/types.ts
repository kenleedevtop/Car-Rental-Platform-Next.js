import { TImage } from 'api/images/types';

export type TGalleryProps = {
  images: Array<TImage>;
  thumbnail: TImage | undefined;
};
