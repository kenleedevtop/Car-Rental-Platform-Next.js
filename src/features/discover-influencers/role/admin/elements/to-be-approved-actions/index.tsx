import React from 'react';
import {
  ToBeApprovedActionsMain,
  ToBeApprovedActionsMenu,
} from 'features/discover-influencers/role/admin/elements/to-be-approved-actions/styles';
import { useMenu } from 'hooks';
import {
  ApproveIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';

const ToBeApprovedActions = ({ ...props }) => {
  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <ToBeApprovedActionsMain onClick={handleMenu}>
      <VerticalDotsIcon />
      {open && (
        <ToBeApprovedActionsMenu
          items={[
            {
              icon: <ApproveIcon />,
              label: 'Approve',
              action: () => {},
            },
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
    </ToBeApprovedActionsMain>
  );
};

export default ToBeApprovedActions;
