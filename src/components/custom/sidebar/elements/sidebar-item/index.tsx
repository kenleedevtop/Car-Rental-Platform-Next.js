import React from 'react';
import {
  SidebarItemMain,
  SidebarItemOuter,
  SidebarItemIcon,
  SidebarItemLabel,
} from 'components/custom/sidebar/elements/sidebar-item/styles';
import { useRouter } from 'next/router';

const SidebarItem = ({ icon, label, location, ...props }: any) => {
  const router = useRouter();

  const active = router.pathname === location;

  return (
    <SidebarItemOuter active={active} href={location}>
      <SidebarItemMain {...props}>
        <SidebarItemIcon>{icon}</SidebarItemIcon>
        <SidebarItemLabel>{label}</SidebarItemLabel>
      </SidebarItemMain>
    </SidebarItemOuter>
  );
};

export default SidebarItem;
