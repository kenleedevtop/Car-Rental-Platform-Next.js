import React, { forwardRef } from 'react';
import { CardMain } from 'components/ui/card/styles';
import { TCardProps, TCardRef } from 'components/ui/card/types';

const Card = forwardRef<TCardRef, TCardProps>(({ ...props }, ref) => (
  <CardMain ref={ref} {...props} />
));

export default Card;
