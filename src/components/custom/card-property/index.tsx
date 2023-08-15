import React from 'react';
import {
  CardMain,
  CardImage,
  CardHead,
  CardPrice,
  CardPriceValue,
  CardBids,
  CardBidsValue,
  CardType,
  CardTypeValue,
  CardBody,
  CardAddress,
  CardAddressSmall,
  CardTitle,
  CardProgress,
  CardProgressBar,
  CardProgressContainer,
  CardProgressValue,
  CardProgressItem,
  CardProgressAvailable,
  CardProgressAvailableValue,
  CardButton,
  CardCompletedMark,
  CardProgressBarPopup,
  CardProgressBarItem,
  CardProgressBarPopupLabel,
  CardProgressBarPopupVaue,
} from 'components/custom/card-property/styles';
import { TPropertyCardProps } from 'components/custom/card-property/types';
import { formatNumber } from 'utilities/extended-proto';

const PropertyCard = ({
  type,
  bids,
  totalPrice,
  address,
  fundPercent,
  available,
  title,
  image,
  completed,
  link,
  investors,
  ...props
}: TPropertyCardProps) => (
  <CardMain animation="zoom-in" {...props}>
    {completed && <CardCompletedMark>Completed</CardCompletedMark>}
    <CardImage src={image} />
    <CardHead>
      {totalPrice && (
        <CardPrice>
          Project Price
          <CardPriceValue>€{formatNumber(totalPrice)}</CardPriceValue>
        </CardPrice>
      )}
      {bids && (
        <CardBids>
          bids
          <CardBidsValue>{bids}</CardBidsValue>
        </CardBids>
      )}
      {type && (
        <CardType>
          type
          <CardTypeValue>{type}</CardTypeValue>
        </CardType>
      )}
    </CardHead>
    <CardBody>
      <CardAddress>
        <CardAddressSmall src="/static/assets/images/croatia.png" />
        {address}
      </CardAddress>
      <CardTitle>{title}</CardTitle>
      {fundPercent && available && (
        <CardProgress>
          <CardProgressBar fundPercent={fundPercent} />
          {investors && investors.length && (
            <CardProgressBarPopup>
              {investors.map((x: any) => (
                <CardProgressBarItem>
                  <CardProgressBarPopupLabel>
                    {x.name}
                  </CardProgressBarPopupLabel>
                  <CardProgressBarPopupVaue>
                    €{formatNumber(x.value)}
                  </CardProgressBarPopupVaue>
                </CardProgressBarItem>
              ))}
            </CardProgressBarPopup>
          )}
          <CardProgressContainer>
            <CardProgressItem>
              <CardProgressValue>{fundPercent}%</CardProgressValue>
              funded
            </CardProgressItem>
            <CardProgressAvailable>
              available
              <CardProgressAvailableValue>
                ${formatNumber(available)}
              </CardProgressAvailableValue>
            </CardProgressAvailable>
          </CardProgressContainer>
        </CardProgress>
      )}
      <CardButton href={link}>View Project</CardButton>
    </CardBody>
  </CardMain>
);

export default PropertyCard;
