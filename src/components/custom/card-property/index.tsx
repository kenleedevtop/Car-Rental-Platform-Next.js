import React from 'react';
import { useRouter } from 'next/router';
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
  TableMenu,
  ISpan,
} from 'components/custom/card-property/styles';
import { TPropertyCardProps } from 'components/custom/card-property/types';
import { formatNumber } from 'utilities/extended-proto';
import { CarretDownIcon, EditIcon, HouseIcon } from 'components/svg';
import { Button } from 'components/ui';
import { useMenu, useModal } from 'hooks';
import { AddProjectModal } from './elements';

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
  label = 'View',
  dropdown = false,
  dropdownOwned = false,
  dropdownAdmin = false,
  ...props
}: TPropertyCardProps) => {
  const [menu, open, handleMenu, buttonRef, position] = useMenu(false);
  const [editModal, openEditModal, closeEditModal] = useModal(false);

  const router = useRouter();

  return (
    <CardMain animation="zoom-in" {...props}>
      {completed && <CardCompletedMark>Completed</CardCompletedMark>}
      <CardImage src={image} />
      <CardHead>
        {rent && (
          <CardPrice>
            Rent
            <CardPriceValue>€{formatNumber(rent)}</CardPriceValue>
          </CardPrice>
        )}
        {availableSpots && spots && (
          <CardPrice>
            Shares
            <CardPriceValue>
              {availableSpots}/{spots}
            </CardPriceValue>
          </CardPrice>
        )}
      </CardHead>
      <CardBody>
        <CardAddress>
          <CardAddressSmall src="/static/assets/images/croatia.png" />
          {address}
        </CardAddress>
        <CardTitle>{title}</CardTitle>
        {!dropdown && !dropdownOwned && !dropdownAdmin && (
          <CardButton href={link}>{label}</CardButton>
        )}
        {dropdown && !dropdownOwned && !dropdownAdmin && (
          <Button variant="contained" color="primary">
            <ISpan onClick={handleMenu} ref={buttonRef}>
              Apply <CarretDownIcon style={{ marginLeft: '10px' }} />
            </ISpan>
            {open && (
              <TableMenu
                position={position}
                items={[
                  {
                    icon: <HouseIcon />,
                    label: 'Apply',
                    action: () => {},
                  },
                  {
                    icon: <HouseIcon />,
                    label: 'View',
                    action: () => {
                      router.push(link);
                    },
                  },
                  {
                    icon: <EditIcon />,
                    label: 'Sell',
                    action: openEditModal,
                  },
                ]}
                ref={menu}
              />
            )}
          </Button>
        )}
        {dropdownOwned && !dropdown && !dropdownAdmin && (
          <Button variant="contained" color="primary">
            <ISpan onClick={handleMenu} ref={buttonRef}>
              Book <CarretDownIcon style={{ marginLeft: '10px' }} />
            </ISpan>
            {open && (
              <TableMenu
                position={position}
                items={[
                  {
                    icon: <HouseIcon />,
                    label: 'Book',
                    action: () => {},
                  },
                  {
                    icon: <HouseIcon />,
                    label: 'View',
                    action: () => {
                      router.push(link);
                    },
                  },
                  {
                    icon: <EditIcon />,
                    label: 'Sell',
                    action: openEditModal,
                  },
                ]}
                ref={menu}
              />
            )}
          </Button>
        )}
        {!dropdownOwned && !dropdown && dropdownAdmin && (
          <Button variant="contained" color="primary">
            <ISpan onClick={handleMenu} ref={buttonRef}>
              {label} <CarretDownIcon style={{ marginLeft: '10px' }} />
            </ISpan>
            {open && (
              <TableMenu
                position={position}
                items={[
                  {
                    icon: <HouseIcon />,
                    label: 'View',
                    action: () => {},
                  },
                  {
                    icon: <HouseIcon />,
                    label: 'Edit',
                    action: () => {
                      router.push(link);
                    },
                  },
                ]}
                ref={menu}
              />
            )}
          </Button>
        )}
      </CardBody>
      {editModal && <AddProjectModal onClose={closeEditModal} />}
    </CardMain>
  );
};

export default PropertyCard;
