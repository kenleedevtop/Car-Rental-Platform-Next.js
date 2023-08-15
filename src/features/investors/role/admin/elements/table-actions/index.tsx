import React from 'react';
import {
  InPreparationActionsMain,
  ISpan,
  TableMenu,
} from 'features/portfolio/role/investor/elements/table-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  DeleteIcon,
  InfoIcon,
  RaiseIcon,
  VerticalDotsIcon,
} from 'components/svg';

const InPreparationActions = ({ ...props }) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <InPreparationActionsMain {...props}>
      <ISpan onClick={handleMenu} ref={buttonRef}>
        <VerticalDotsIcon onClick={handleMenu} />
      </ISpan>
      {open && (
        <TableMenu
          position={position}
          items={[
            {
              icon: <InfoIcon />,
              label: 'Accept',
              action: () => {},
            },
            {
              icon: <RaiseIcon />,
              label: 'Decline',
              action: () => {},
            },
          ]}
          ref={menu}
        />
      )}
    </InPreparationActionsMain>
  );
};

export default InPreparationActions;
