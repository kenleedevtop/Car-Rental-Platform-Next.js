import React from 'react';
import {
  SidebarMain,
  SidebarLogo,
  SidebarItems,
  SidebarLogoLink,
  SidebarCancel,
} from 'components/custom/sidebar/styles';
import {
  SidebarItem,
  SidebarItemNested,
} from 'components/custom/sidebar/elements';
import { DSidebarItems } from 'components/custom/sidebar/data';
import { TSidebarProps } from 'components/custom/sidebar/types';
import { useAppContext } from 'context';
import { CancelIcon } from 'components/svg';

const Sidebar = ({ ...props }: TSidebarProps) => {
  const { role, handleMobileMenu, showMobileMenu } = useAppContext();

  const handleSidebar = () => {
    if (window.innerWidth < 1200) {
      handleMobileMenu(!showMobileMenu);
    }
  };

  return (
    <SidebarMain {...props}>
      <SidebarCancel onClick={handleSidebar}>
        <CancelIcon />
      </SidebarCancel>
      <SidebarLogoLink href="/">
        <SidebarLogo src="/static/assets/images/PatientsInfluence.svg" />
      </SidebarLogoLink>
      <SidebarItems>
        {DSidebarItems.filter((x) => x.roles.includes(role)).map((x) =>
          x.type === 'nested' ? (
            <SidebarItemNested
              label={x.label}
              icon={x.icon}
              items={x.items}
              key={x.id}
              onClick={handleSidebar}
            />
          ) : (
            <SidebarItem
              label={x.label}
              icon={x.icon}
              location={x.location}
              key={x.id}
              onClick={handleSidebar}
            />
          )
        )}
      </SidebarItems>
    </SidebarMain>
  );
};

export default Sidebar;
