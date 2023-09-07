import React from 'react';
import { useMenu, useSnackbar } from 'hooks';
import {
  ApproveIcon,
  DeleteIcon,
  ReceivedIcon,
  VerticalDotsIcon,
} from 'components/svg';
import UsersAPI from 'api/users';
import {
  ApplicationStatusActionsMain,
  ApplicationStatusActionsMenu,
  ISpan,
} from './styles';
import { TUserOptionMenu } from './types';
import { useRouter } from 'next/router';

const UserMenuActions = ({ reload, userId, ...props }: TUserOptionMenu) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const { push } = useSnackbar();
  const handleMenu = () => {
    setOpen(!open);
  };

  const router = useRouter();

  const handleDelete = async () => {
    try {
      await UsersAPI.deleteUser(userId);
      reload();
      push(`User Deleted successfully!`, {
        variant: 'success',
      });
    } catch (e: any) {
      push('Some thing went wrong', { variant: 'error' });
    }
  };

  const ApplicationStatusActions = [
    {
      icon: <ReceivedIcon />,
      label: 'View Profile',
      action: () => {
        router.push(`/users/overview?userId=${userId}`);
        handleMenu();
      },
    },
    {
      icon: <DeleteIcon />,
      label: 'Remove Profile',
      action: () => {
        handleDelete();
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
    </ApplicationStatusActionsMain>
  );
};

export default UserMenuActions;
