import React from 'react';
import {
  ToBeApprovedActionsMain,
  ToBeApprovedActionsMenu,
  ISpan,
} from 'features/discover-influencers/role/admin/elements/to-be-approved-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  ApproveIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
import {
  ContactInfluencerModal,
  DeleteInfluencerModal,
  NoteInfluencer,
  ScheduleInfluencerModal,
} from 'features/discover-influencers/role/admin/elements';
import { TToBeApprovedProps } from 'features/discover-influencers/role/admin/elements/to-be-approved-actions/types';

const ToBeApprovedActions = ({ data, ...props }: TToBeApprovedProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);

  return (
    <ToBeApprovedActionsMain>
      <ISpan onClick={handleMenu} ref={buttonRef}>
        <VerticalDotsIcon onClick={handleMenu} />
      </ISpan>
      {open && (
        <ToBeApprovedActionsMenu
          position={position}
          items={[
            {
              icon: <ApproveIcon />,
              label: 'Approve',
              action: () => {},
            },
            {
              icon: <ContactIcon />,
              label: 'Contact',
              action: () => {
                openCiModal();
                handleMenu();
              },
            },
            {
              icon: <EditIcon />,
              label: 'Note',
              action: () => {
                openNiModal();
                handleMenu();
              },
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {
                openSiModal();
                handleMenu();
              },
            },
            {
              icon: <DeleteIcon />,
              label: 'Remove',
              action: () => {
                openDiModal();
                handleMenu();
              },
            },
          ]}
          ref={menu}
        />
      )}
      {ciModal && <ContactInfluencerModal id={data} onClose={closeCiModal} />}
      {niModal && <NoteInfluencer onClose={closeNiModal} />}
      {diModal && (
        <DeleteInfluencerModal
          id={data}
          onClose={() => {
            closeDiModal();
          }}
        />
      )}
      {siModal && <ScheduleInfluencerModal onClose={closeSiModal} />}
    </ToBeApprovedActionsMain>
  );
};

export default ToBeApprovedActions;
