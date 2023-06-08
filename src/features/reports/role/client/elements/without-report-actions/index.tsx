import React from 'react';
import {
  InPreparationActionsMain,
  InPreparationActionsMenu,
  ISpan,
} from 'features/reports/role/client/elements/without-report-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  ContactIcon,
  InfoIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { TInpreparationActionsMenuProps } from 'features/reports/role/client/elements/without-report-actions/types';
import { CreatedSurveysModal } from 'features/surveys/role/client/elements';
import { useRouter } from 'next/router';

const InPreparationActions = ({ ...props }: TInpreparationActionsMenuProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [cdModal, openCdModal, closeCdModal] = useModal(false);

  const router = useRouter();

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
              icon: <ContactIcon />,
              label: 'Contact',
              action: () => {
                window.location.href = `mailto:client@patientsinfluence.com`;
              },
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {
                router.push(
                  'https://calendly.com/patientsinfluence-client/30min'
                );
              },
            },
          ]}
          ref={menu}
        />
      )}
      {/* {cdModal && <CreatedSurveysModal onClose={closeCdModal} />} */}
    </InPreparationActionsMain>
  );
};

export default InPreparationActions;
