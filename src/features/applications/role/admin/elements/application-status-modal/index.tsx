import React from 'react';
import { useMenu, useSnackbar } from 'hooks';
import {
  ApproveIcon,
  DeclineIcon,
  FinishedIcon,
  ReceivedIcon,
  RecommendedIcon,
  VerticalDotsIcon,
  WithoutReportIcon,
} from 'components/svg';
import { TApplicationStatusProps } from './types';
import {
  ApplicationStatusActionsMain,
  ApplicationStatusActionsMenu,
  ISpan,
} from './styles';
import { ApplicationAPI, CarAPI } from 'api';
import { useRouter } from 'next/router';

const ApplicationStatusActions = ({
  reload,
  applicationId,
  userId,
  status,
  carId,
  ...props
}: TApplicationStatusProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const { push } = useSnackbar();
  const handleMenu = () => {
    setOpen(!open);
  };
  const router = useRouter();

  const handleChange = async (status: string) => {
    try {
      await ApplicationAPI.updateApplication({ status }, applicationId);

      const data = {
        carId: carId ? carId : 1,
        userId: userId ? userId : 1,
      };
      if (status == 'Ownership' && userId && carId) {
        await CarAPI.createCarOwner(data);
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
      icon: <ReceivedIcon />,
      label: 'View',
      action: () => {
        router.push(`/users/overview?userId=${userId}`);
        handleMenu();
      },
    },
    {
      icon: <ApproveIcon />,
      label: 'Paid',
      action: () => {
        handleChange('Paid');
        handleMenu();
      },
    },
    {
      icon: <DeclineIcon />,
      label: 'Ownership',
      action: () => {
        handleChange('Ownership');
        handleMenu();
      },
    },
    {
      icon: <RecommendedIcon />,
      label: 'Withdrawn',
      action: () => {
        handleChange('Withdrawn');
        handleMenu();
      },
    },
  ];
  const ApplicationStatusActions2 = [
    {
      icon: <ReceivedIcon />,
      label: 'View',
      action: () => {
        router.push(`/users/overview?userId=${userId}`);
        handleMenu();
      },
    },
    {
      icon: <ApproveIcon />,
      label: 'Shortlist',
      action: () => {
        handleChange('Shortlist');
        handleMenu();
      },
    },
    {
      icon: <DeclineIcon />,
      label: 'Reject',
      action: () => {
        handleChange('Reject');
        handleMenu();
      },
    },
    {
      icon: <RecommendedIcon />,
      label: 'Select',
      action: () => {
        handleChange('Select');
        handleMenu();
      },
    },
    {
      icon: <WithoutReportIcon />,
      label: 'Accomodate',
      action: () => {
        handleChange('Accomodate');
        handleMenu();
      },
    },
    {
      icon: <FinishedIcon />,
      label: 'Widthdrawn',
      action: () => {
        handleChange('Widthdrawn');
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
          items={
            status === 'Accomodate'
              ? ApplicationStatusActions2
              : ApplicationStatusActions
          }
          ref={menu}
        />
      )}
    </ApplicationStatusActionsMain>
  );
};

export default ApplicationStatusActions;
