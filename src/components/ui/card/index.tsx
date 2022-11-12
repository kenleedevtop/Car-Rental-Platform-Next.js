import React from 'react';
import { CardMain } from 'components/ui/card/styles';
import { TCardProps } from 'components/ui/card/types';

const Card = ({ ...props }: TCardProps) => <CardMain {...props} />;

export default Card;
