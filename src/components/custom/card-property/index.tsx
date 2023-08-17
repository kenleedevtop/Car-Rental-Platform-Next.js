import React from 'react';
import {
  CardMain,
  CardImage,
  CardHead,
  CardPrice,
  CardPriceValue,
  CardBody,
  CardAddress,
  CardAddressSmall,
  CardTitle,
  CardProgressValue,
  CardProgressItem,
  CardButton,
  CardCompletedMark,
} from 'components/custom/card-property/styles';
import { TPropertyCardProps } from 'components/custom/card-property/types';
import { formatNumber } from 'utilities/extended-proto';

const PropertyCard = ({
  image,
  address,
  title,
  link,
  spots,
  availableSpots,
  status,
  rent,
  theme,
  completed,
  ...props
}: TPropertyCardProps) => (
  <CardMain animation="zoom-in" {...props}>
    {completed && <CardCompletedMark>Filled</CardCompletedMark>}
    <CardImage src={image} />
    <CardHead>
      {rent && (
        <CardPrice>
          Rent
          <CardPriceValue>€{formatNumber(rent)}</CardPriceValue>
        </CardPrice>
      )}
      {theme && (
        <CardPrice>
          Theme
          <CardPriceValue>Marketing</CardPriceValue>
        </CardPrice>
      )}
    </CardHead>
    <CardBody>
      <CardAddress>
        <CardAddressSmall src="/static/assets/images/croatia.png" />
        {address}
      </CardAddress>
      <CardTitle>{title}</CardTitle>
      {spots && availableSpots && (
        <CardProgressItem>
          Available spots
          <CardProgressValue>
            {availableSpots}/{spots}
          </CardProgressValue>
        </CardProgressItem>
      )}
      {status && (
        <CardProgressItem>
          Status
          <CardProgressValue>{status}</CardProgressValue>
        </CardProgressItem>
      )}
      <CardButton href={link}>Apply</CardButton>
    </CardBody>
  </CardMain>
);

export default PropertyCard;
