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
import { SellPropertyModal } from '..';

const InPreparationActions = ({ ...props }) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [sellPropertyModal, openSellPropertyModal, closeSellPropertyModal] =
    useModal(false);

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
              label: 'Info',
              action: () => {},
            },
            {
              icon: <RaiseIcon />,
              label: 'Sell',
              action: openSellPropertyModal,
            },
          ]}
          ref={menu}
        />
      )}
      {sellPropertyModal && (
        <SellPropertyModal onClose={closeSellPropertyModal} />
      )}
    </InPreparationActionsMain>
  );
};

export default InPreparationActions;
