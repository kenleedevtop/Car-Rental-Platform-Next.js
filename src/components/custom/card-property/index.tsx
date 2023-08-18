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
  CardDropdown,
  TableMenu,
  ISpan,
} from 'components/custom/card-property/styles';
import { TPropertyCardProps } from 'components/custom/card-property/types';
import { formatNumber } from 'utilities/extended-proto';
import {
  CarretDownIcon,
  DeleteIcon,
  EditIcon,
  HouseIcon,
} from 'components/svg';
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
  label = 'Apply',
  dropdown = false,
  ...props
}: TPropertyCardProps) => {
  const [menu, open, handleMenu, buttonRef, position] = useMenu(false);
  const [editModal, openEditModal, closeEditModal] = useModal(false);

  const router = useRouter();

  return (
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
        {!dropdown && <CardButton href={link}>{label}</CardButton>}
        {dropdown && (
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
                    action: () => {
                      router.push(link);
                    },
                  },
                  {
                    icon: <EditIcon />,
                    label: 'Edit',
                    action: openEditModal,
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
