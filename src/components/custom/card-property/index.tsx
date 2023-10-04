import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  CardMain,
  CardHead,
  CardPrice,
  CardPriceValue,
  CardBody,
  CardAddress,
  CardAddressSmall,
  CardTitle,
  CardStatus,
  CardCompletedMark,
  TableMenu,
  ISpan,
  CardLink,
  IDownArrow,
  CardStatusLabel,
} from 'components/custom/card-property/styles';
import Image from 'next/image';

import { TPropertyCardProps } from 'components/custom/card-property/types';
import { formatNumber } from 'utilities/extended-proto';
import { CarretDownIcon, EditIcon, CarIcon, ProfitIcon } from 'components/svg';
import { Button } from 'components/ui';
import { useMenu, useModal, useSnackbar } from 'hooks';
import { convertLocationToFlag } from 'utilities/converters';
import Project from 'constants/project';
import { ApplicationModal, SellShareModal } from 'features/opportunities/role/user/elements';
import { EditProjectModal } from 'features/opportunities/role/admin/elements';
import { BookingModal } from 'features/booking/role/user/elements';
import { useAppContext } from 'context';


const PropertyCard = ({
  image,
  house,
  link,
  label = 'Apply',
  completed = false,
  dropdown = false,
  refresh,
  ...props
}: TPropertyCardProps) => {
  const [menu, open, handleMenu, buttonRef, position] = useMenu(false);
  const [editModal, openEditModal, closeEditModal] = useModal(false);
  const [applicationModal, openApplicationModal, closeApplicationModal] =
    useModal(false);

  const [bookingModal, openBookingModal, closeBookingModal] = useModal(false);

  const [sellShareModal, openSellShareModal, closeSellShareModal] =
    useModal(false);
  const { role } = useAppContext();


  const [flagUrl, setFlagUrl] = useState<string>();
  const router = useRouter();
  useEffect(() => {
    const flag = convertLocationToFlag(house.location);
    setFlagUrl(flag);
  }, [house.location]);
  return (
    <CardMain animation="zoom-in" {...props}>
      {completed && <CardCompletedMark>Completed</CardCompletedMark>}
      <Image
        src={image ? `${Project.apis.v1}/public/images/${image.key}` : ''}
        alt="Supercars thumbnail"
        width={300}
        height={300}
        priority={true}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          maxHeight: '250px',
          borderTopRightRadius: 7,
          borderTopLeftRadius: 7,
          cursor: 'pointer',
        }}
        onClick={() => {
          router.push(link);
        }}
      />
      <CardHead>
        {house.sharePrice && (
          <CardPrice>
            Share Price
            <CardPriceValue>€{formatNumber(house.sharePrice)}</CardPriceValue>
          </CardPrice>
        )}
        {house.availableShares && house.totalShares && (
          <CardPrice>
            Shares
            <CardPriceValue>
              {' '}
              {house.availableShares}/{house.totalShares}
            </CardPriceValue>
          </CardPrice>
        )}
      </CardHead>
      <CardBody>
        <CardLink
          onClick={() => {
            router.push(link);
          }}
        >
          <CardAddress>
            <CardAddressSmall src={flagUrl} />
            {house.location}
          </CardAddress>
          <CardTitle>{house.name}</CardTitle>
        </CardLink>
        {!dropdown && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            disabled={completed || (house.applicationStatus !== 'Ownership' && house.applicationStatus !== undefined)}
            onClick={() => { label == 'Book' ? openBookingModal() : openApplicationModal() }}
          >
            {label}
          </Button>

        )}
        {dropdown && (
          <Button variant="contained" color="primary">
            <ISpan onClick={handleMenu} ref={buttonRef}>
              {label}
              <IDownArrow>
                <CarretDownIcon style={{ marginLeft: '10px' }} />
              </IDownArrow>
            </ISpan>
            {open && (
              <TableMenu
                position={position}
                items={[
                  {
                    icon: <CarIcon />,
                    label: 'View',
                    action: () => {
                      router.push(link);
                      handleMenu();
                    },
                  },
                  role == 'ADMIN' ?
                    {
                      icon: <EditIcon />,
                      label: 'Edit',
                      action: () => {
                        handleMenu();
                        openEditModal();
                      },
                    } :
                    {
                      icon: <ProfitIcon />,
                      label: 'Sell',
                      action: () => {
                        handleMenu();
                        openSellShareModal();
                      },
                    }
                ]}
                ref={menu}
              />
            )}
          </Button>
        )}
      </CardBody>
      {editModal && (
        <EditProjectModal
          carId={house.id}
          onClose={closeEditModal}
          refresh={refresh}
        />
      )}
      {applicationModal && (
        <ApplicationModal
          carId={house.id}
          onClose={closeApplicationModal}
          refresh={refresh}
          carName={house.name}
          availableShares={house.availableShares}
          sharePrice={house.sharePrice}
          totalShares={house.totalShares}
          startDate={house.startDate}
        />
      )}
      {bookingModal && <BookingModal onClose={closeBookingModal} car={house} />}

      {sellShareModal && (
        <SellShareModal
          carId={house.id}
          onClose={closeSellShareModal}
          carName={house.name}
          refresh={refresh}
          availableShares={house.availableShares}
          sharePrice={house.sharePrice}
          totalShares={house.totalShares}
          startDate={house.startDate}
        />
      )}

    </CardMain>
  );
};

export default PropertyCard;
