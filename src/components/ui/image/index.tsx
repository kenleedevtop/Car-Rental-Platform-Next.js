import React, { useEffect, useRef, useState } from 'react';
import { ImageMain } from 'components/ui/image/styles';
import { TImageProps } from 'components/ui/image/types';

const Image = ({ src, onLoad, ...props }: TImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) setLoaded(true);
  }, []);

  return (
    <ImageMain
      ref={imageRef}
      src={src}
      onLoadCapture={handleLoad}
      loaded={loaded}
      {...props}
    />
  );
};

export default Image;
