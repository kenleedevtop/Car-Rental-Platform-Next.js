import React from 'react';
import { useMenu, useModal, useSnackbar } from 'hooks';
import {
  DeleteIcon,
  EditIcon,
  RecommendedIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { TBookingStatusProps } from './types';
import {
  ApplicationStatusActionsMain,
  ApplicationStatusActionsMenu,
  ISpan,
} from './styles';
import { ApplicationAPI, CarAPI } from 'api';
import { useRouter } from 'next/router';
import { BookingModal, BookingOverviewModal, TransferOwnershipModal } from 'features/booking/role/admin/elements';

const BookingStatusActions = ({
  reload,
  booking,
  userId,
  status,
  carId,
  ...props
}: TBookingStatusProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const [bookingModal, openBookingModal, closeBookingModal] = useModal(false);


  const [
    bookingOverviewModal,
    openBookingOverviewModal,
    closeBookingOverviewModal,
  ] = useModal(false);


  const [
    transferOwnershipModal,
    openTransferOwnershipModal,
    closeTransferOwnershipModal,
  ] = useModal(false);


  const { push } = useSnackbar();
  const handleMenu = () => {
    setOpen(!open);
  };
  const router = useRouter();

  const handleChange = async (status: string) => {
    try {
      if (status == 'edit') {
        openBookingModal();
      }
      reload();
      push(`Application status changed to  ${status} successfully!`, {
        variant: 'success',
      });
    } catch (e: any) {
      reload();
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const ApplicationStatusActions = [
    {
      icon: <RecommendedIcon />,
      label: 'View',
      action: () => {
        openBookingOverviewModal();
        handleMenu();
      },
    },
    {
      icon: <EditIcon />,
      label: 'Edit',
      action: () => {
        openBookingModal();
        handleMenu();
      },
    },
    {
      icon: <DeleteIcon />,
      label: 'Remove',
      action: () => {
        handleChange('Ownership');
        handleMenu();
      },
    },
  ];

  return (
    <ApplicationStatusActionsMain>
      <ISpan ref={buttonRef}>
        <VerticalDotsIcon onClick={handleMenu} />
      </ISpan>
      {open && (
        <ApplicationStatusActionsMenu
          position={position}
          items={ApplicationStatusActions}
          ref={menu}
        />
      )}
      {bookingModal && <BookingModal onClose={closeBookingModal} car={null}/>}
      {bookingOverviewModal && (
        <BookingOverviewModal onClose={closeBookingOverviewModal} car={booking}/>
      )}
      {transferOwnershipModal && (
        <TransferOwnershipModal onClose={closeTransferOwnershipModal} car={booking}/>
      )}
    </ApplicationStatusActionsMain>
  );
};

export default BookingStatusActions;
