import React from 'react';
import {
  InPreparationActionsMain,
  ISpan,
  TableMenu,
} from 'components/custom/card-with-chart-homepage/elements/chart-actions/styles';
import { useMenu } from 'hooks';
import { HorizontalDots } from 'components/svg';

const InPreparationActions = ({ ...props }) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <InPreparationActionsMain {...props}>
      <ISpan onClick={handleMenu} ref={buttonRef}>
        <HorizontalDots onClick={handleMenu} />
      </ISpan>
      {open && (
        <TableMenu
          position={position}
          items={[
            {
              label: 'Amount',
              action: () => {},
            },
            {
              label: 'Square Meter',
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
