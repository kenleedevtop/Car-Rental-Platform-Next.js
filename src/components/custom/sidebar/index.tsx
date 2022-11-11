import React, { useState } from 'react';
import {
  SidebarMain,
  SidebarLogo,
  SidebarItems,
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarDropDown,
  SidebarDropDownItem,
  SidebarItemOuter,
} from 'components/custom/sidebar/styles';

import { ArrowDownIcon } from 'components/svg';
import { DSidebarItems } from './data';

const Sidebar = ({ role = 'admin', ...props }: any) => {
  const [_openDropdown, _setOpenDropdown] = useState(false);

  return (
    <SidebarMain {...props}>
      <SidebarLogo src="assets/images/logo.png" />
      <SidebarItems>
        {DSidebarItems.filter((x) => x.roles.includes(role)).map((x) => (
          <SidebarItemOuter>
            <SidebarItem>
              <SidebarItemIcon>{x.icon}</SidebarItemIcon>
              <SidebarItemLabel>{x.label}</SidebarItemLabel>
              {x.type === 'nested' && <ArrowDownIcon />}
            </SidebarItem>
            {x.type === 'nested' && (
              <SidebarDropDown>
                {x.items.map((y) => (
                  <SidebarDropDownItem>
                    <SidebarItemLabel>{y.label}</SidebarItemLabel>
                  </SidebarDropDownItem>
                ))}
              </SidebarDropDown>
            )}
          </SidebarItemOuter>
        ))}
      </SidebarItems>
    </SidebarMain>
  );
};

export default Sidebar;
