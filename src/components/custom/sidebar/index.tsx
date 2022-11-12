import React, { useState } from 'react';
import {
  SidebarMain,
  SidebarLogo,
  SidebarItems,
  SidebarLogoLink,
} from 'components/custom/sidebar/styles';
import {
  SidebarItem,
  SidebarItemNested,
} from 'components/custom/sidebar/elements';
import { DSidebarItems } from 'components/custom/sidebar/data';

const Sidebar = ({ role = 'client', ...props }: any) => {
  const [_openDropdown, _setOpenDropdown] = useState(false);

  return (
    <SidebarMain {...props}>
      <SidebarLogoLink href="/">
        <SidebarLogo src="/assets/images/logo.png" />
      </SidebarLogoLink>
      <SidebarItems>
        {DSidebarItems.filter((x) => x.roles.includes(role)).map((x) =>
          x.type === 'nested' ? (
            <SidebarItemNested label={x.label} icon={x.icon} items={x.items} />
          ) : (
            <SidebarItem label={x.label} icon={x.icon} location={x.location} />
          )
        )}
      </SidebarItems>
    </SidebarMain>
  );
};

export default Sidebar;
