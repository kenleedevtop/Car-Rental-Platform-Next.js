import React from 'react';
import {
  DiscoverActionsMain,
  DiscoverActionsMenu,
} from 'features/discover-influencers/role/admin/elements/discover-actions/styles';
import { useMenu } from 'hooks';
import {
  ApproveIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';

const DiscoverActions = ({ ...props }) => {
  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <DiscoverActionsMain onClick={handleMenu}>
      <VerticalDotsIcon />
      {open && (
        <DiscoverActionsMenu
          items={[
            {
              icon: <ContactIcon />,
              label: 'Contact',
              action: () => {},
            },
            {
              icon: <EditIcon />,
              label: 'Note',
              action: () => {},
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {},
            },
            {
              icon: <DeleteIcon />,
              label: 'Remove',
              action: () => {},
            },
          ]}
          ref={menu}
        />
      )}
    </DiscoverActionsMain>
  );
};

export default DiscoverActions;
