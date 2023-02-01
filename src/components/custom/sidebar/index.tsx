import React from 'react';
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
import { TSidebarProps } from 'components/custom/sidebar/types';
import { useAppContext } from 'context';

const Sidebar = ({ ...props }: TSidebarProps) => {
  const { role } = useAppContext();

  return (
    <SidebarMain {...props}>
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
            />
          ) : (
            <SidebarItem
              label={x.label}
              icon={x.icon}
              location={x.location}
              key={x.id}
            />
          )
        )}
      </SidebarItems>
    </SidebarMain>
  );
};

export default Sidebar;
