import React, { useEffect } from 'react';
import {
  OrderedActionsMain,
  OrderedActionsMenu,
} from 'features/sml/role/client/elements/ordered-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  ContactIcon,
  OrderedIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
// import {
//   ContactInfluencerModal,
//   DeleteInfluencerModal,
//   NoteInfluencer,
//   ScheduleInfluencerModal,
// } from 'features/sml/role/client/elements';
import { TOrderedActionsMenuProps } from 'features/sml/role/client/elements/ordered-actions/types';

const DiscoverActions = ({
  data,
  refreshInfluencers,
  ...props
}: TOrderedActionsMenuProps) => {
  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  // const [ciModal, openCiModal, closeCiModal] = useModal(false);
  // const [siModal, openSiModal, closeSiModal] = useModal(false);
  // const [niModal, openNiModal, closeNiModal] = useModal(false);
  // const [diModal, openDiModal, closeDiModal] = useModal(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <OrderedActionsMain>
      <VerticalDotsIcon onClick={handleMenu} />
      {open && (
        <OrderedActionsMenu
          items={[
            {
              icon: <OrderedIcon />,
              label: 'Order',
              action: () => {},
            },
            {
              icon: <ContactIcon />,
              label: 'Contact',
              action: () => {},
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {},
            },
          ]}
          ref={menu}
        />
      )}
      {/* {ciModal && <ContactInfluencerModal id={data} onClose={closeCiModal} />}
      {niModal && <NoteInfluencer onClose={closeNiModal} />}
      {siModal && <ScheduleInfluencerModal onClose={closeSiModal} />} */}
    </OrderedActionsMain>
  );
};

export default DiscoverActions;
