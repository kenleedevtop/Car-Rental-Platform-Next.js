import React from 'react';
import {
  InPreparationActionsMain,
  InPreparationActionsMenu,
  ISpan,
} from 'features/surveys/role/client/elements/inpreparation-actions/styles';
import { useMenu, useModal } from 'hooks';
import { DeleteIcon, InfoIcon, VerticalDotsIcon } from 'components/svg';
import DeleteCampaignModal from '../delete-campaign-modal';
import { TInpreparationActionsMenuProps } from './types';
import CreatedCampaignModal from '../created-campaign-modal';

const InPreparationActions = ({
  data,
  reload,
  ...props
}: TInpreparationActionsMenuProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [ccModal, openCcModal, closeCcModal] = useModal(false);
  const [dcModal, openDCModal, closeDCModal] = useModal(false);

  // const router = useRouter();

  const handleInfo = () => {
    openCcModal();
    handleMenu();
  };

  const handleRemove = () => {
    openDCModal();
    handleMenu();
  };

  return (
    <InPreparationActionsMain {...props}>
      <ISpan onClick={handleMenu} ref={buttonRef}>
        <VerticalDotsIcon onClick={handleMenu} />
      </ISpan>
      {open && (
        <InPreparationActionsMenu
          position={position}
          items={[
            {
              icon: <InfoIcon />,
              label: 'Info',
              action: handleInfo,
            },
            // {
            //   icon: <ManageIcon />,
            //   label: 'Manage',
            //   action: () => {},
            // },
            // {
            //   icon: <ContactIcon />,
            //   label: 'Contact',
            //   action: () => {
            //     window.location.href = `mailto:client@patientsinfluence.com`;
            //   },
            // },
            // {
            //   icon: <ScheduleIcon />,
            //   label: 'Schedule',
            //   action: () => {
            //     router.push(
            //       'https://calendly.com/patientsinfluence-client/30min'
            //     );
            //   },
            // },
            {
              icon: <DeleteIcon />,
              label: 'Remove',
              action: handleRemove,
            },
          ]}
          ref={menu}
        />
      )}
      {ccModal && (
        <CreatedCampaignModal
          id={data}
          onClose={closeCcModal}
          reload={reload}
        />
      )}
      {dcModal && (
        <DeleteCampaignModal id={data} onClose={closeDCModal} reload={reload} />
      )}
    </InPreparationActionsMain>
  );
};

export default InPreparationActions;
