import React, { forwardRef } from 'react';

import {
  MenuMain,
  MenuItem,
  MenuItemIcon,
  MenuItemLabel,
} from 'components/custom/menu/styles';
import { TMenuProps, TMenuRef } from 'components/custom/menu/types';

const Menu = forwardRef<TMenuRef, TMenuProps>(({ items, ...props }, ref) => (
  <MenuMain ref={ref} {...props}>
    {items.map((x) => (
      <MenuItem onClick={x.action}>
        <MenuItemIcon> {x.icon}</MenuItemIcon>
        <MenuItemLabel>{x.label}</MenuItemLabel>
      </MenuItem>
    ))}
  </MenuMain>
));

export default Menu;
