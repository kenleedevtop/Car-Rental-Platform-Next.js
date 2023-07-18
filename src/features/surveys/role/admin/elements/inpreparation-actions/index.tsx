import React from 'react';

import { useMenu, useModal } from 'hooks';
import {
  ContactIcon,
  InfoIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { useRouter } from 'next/router';
import { TInpreparationActionsMenuProps } from './types';
import {
  ISpan,
  InPreparationActionsMain,
  InPreparationActionsMenu,
} from './styles';
import CreatedSurveysModal from '../created-surveys-modal';

const InPreparationActions = ({
  data,
  reload,
  ...props
}: TInpreparationActionsMenuProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [cdModal, openCdModal, closeCdModal] = useModal(false);

  const router = useRouter();

  return (
    <InPreparationActionsMain {...props}>
      <ISpan onClick={handleMenu} ref={buttonRef}>
        <VerticalDotsIcon />
      </ISpan>
      {open && (
        <InPreparationActionsMenu
          position={position}
          items={[
            {
              icon: <InfoIcon />,
              label: 'Info',
              action: () => {
                openCdModal();
                handleMenu();
              },
            },
            {
              icon: <ContactIcon />,
              label: 'Contact',
              action: () => {
                router.push(`mailto:client@patientsinfluence.com`);
                handleMenu();
              },
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {
                router.push(
                  'https://calendly.com/patientsinfluence-client/30min'
                );
                handleMenu();
              },
            },
          ]}
          ref={menu}
        />
      )}
      {cdModal && data && (
        <CreatedSurveysModal id={data} onClose={closeCdModal} reload={reload} />
      )}
    </InPreparationActionsMain>
  );
};

export default InPreparationActions;
