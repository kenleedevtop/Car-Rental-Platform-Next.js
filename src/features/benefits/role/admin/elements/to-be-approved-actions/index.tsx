import React from 'react';
import {
  ToBeApprovedActionsMain,
  ToBeApprovedActionsMenu,
} from 'features/discover-influencers/role/admin/elements/to-be-approved-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  ApproveIcon,
  DeleteIcon,
  InfoIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { BenefitsAPI } from 'api';
import {
  ChangeBenefit,
  ConfirmRemoveBenefitModal,
} from 'features/benefits/role/admin/elements';

const ToBeApprovedActions = ({ action, data, ...props }: any) => {
  const [menuTba, openTba, setOpenTba] = useMenu(false);
  const [cbModal, openCbModal, closeCbModal] = useModal(false);
  const [crbModal, openCrbModal, closeCrbModal] = useModal(false);

  const handleMenu = () => {
    setOpenTba(!openTba);
  };

  // const handleDelete = async (id: any) => {
  //   await BenefitsAPI.deleteBenefit(id);
  //   action();
  // }

  return (
    <ToBeApprovedActionsMain>
      <VerticalDotsIcon onClick={handleMenu} />
      {openTba && (
        <ToBeApprovedActionsMenu
          items={[
            {
              icon: <ApproveIcon />,
              label: 'Approve',
              action: () => {},
            },
            {
              icon: <InfoIcon />,
              label: 'Info',
              action: () => {
                handleMenu();
                openCbModal();
              },
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {},
            },
            {
              icon: <DeleteIcon />,
              label: 'Remove',
              action: () => {
                handleMenu();
                openCrbModal();
              },
            },
          ]}
          ref={menuTba}
        />
      )}
      {crbModal && (
        <ConfirmRemoveBenefitModal
          action={action}
          id={data.id}
          onClose={() => {
            closeCrbModal();
            action();
          }}
        />
      )}
      {cbModal && (
        <ChangeBenefit
          data={data}
          onClose={() => {
            closeCbModal();
            action();
          }}
        />
      )}
    </ToBeApprovedActionsMain>
  );
};

export default ToBeApprovedActions;
