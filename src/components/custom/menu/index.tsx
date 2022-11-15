import React from 'react';

import {
  MenuMain,
  MenuItem,
  MenuItemIcon,
  MenuItemLabel,
} from 'components/custom/menu/styles';
import { TMenuItemsProps } from 'components/custom/menu/types';

const Menu = ({ items, ...props }: TMenuItemsProps) => (
  <MenuMain {...props}>
    {items.map((x) => (
      <MenuItem>
        <MenuItemIcon> {x.icon}</MenuItemIcon>
        <MenuItemLabel>{x.label}</MenuItemLabel>
      </MenuItem>
    ))}
  </MenuMain>
);

export default Menu;
