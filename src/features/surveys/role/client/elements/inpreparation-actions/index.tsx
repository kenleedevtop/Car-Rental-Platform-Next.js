import React from 'react';
import {
  InPreparationActionsMain,
  InPreparationActionsMenu,
  ISpan,
} from 'features/surveys/role/client/elements/inpreparation-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  ContactIcon,
  InfoIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { TInpreparationActionsMenuProps } from 'features/surveys/role/client/elements/inpreparation-actions/types';
import { CreatedSurveysModal } from 'features/surveys/role/client/elements';
import { useRouter } from 'next/router';

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
      {cdModal && <CreatedSurveysModal id={data} onClose={closeCdModal} />}
    </InPreparationActionsMain>
  );
};

export default InPreparationActions;
