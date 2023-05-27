import React, { useEffect } from 'react';
import {
  DiscoverActionsMain,
  DiscoverActionsMenu,
} from 'features/discover-influencers/role/admin/elements/discover-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
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
import { TDiscoverActionsMenuProps } from 'features/discover-influencers/role/admin/elements/discover-actions/types';

const DiscoverActions = ({
  data,
  refreshInfluencers,
  ...props
}: TDiscoverActionsMenuProps) => {
  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <DiscoverActionsMain>
      <VerticalDotsIcon onClick={handleMenu} />
      {open && (
        <DiscoverActionsMenu
          items={[
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
          refreshInfluencers={refreshInfluencers}
          onClose={() => {
            refreshInfluencers();
            closeDiModal();
          }}
        />
      )}
      {siModal && <ScheduleInfluencerModal onClose={closeSiModal} />}
    </DiscoverActionsMain>
  );
};

export default DiscoverActions;
