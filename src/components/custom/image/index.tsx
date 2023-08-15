import React from 'react';
import { TImageProps } from 'components/custom/image/types';
import { SImage } from 'components/custom/image/styles';

const Image = ({
  imageUrl,
  alt = 'Beautifull Image',
  ...props
}: TImageProps) => <SImage src={imageUrl} alt={alt} {...props} />;

export default Image;
