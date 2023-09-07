import React from 'react';
import {
  SidebarItemMain,
  SidebarItemOuter,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarDisabledItemOuter,
} from 'components/custom/sidebar/elements/sidebar-item/styles';
import { useRouter } from 'next/router';
import { Tooltip } from '@mui/material';
import { SidebarTooltipContainer } from './elements/sidebar-tooltip';

const SidebarItem = ({ icon, label, location, isDisabled, ...props }: any) => {
  const router = useRouter();
  let active;

  if (router.pathname === location) {
    active = 'true';
  } else {
    active = 'false';
  }

  return isDisabled ? (
    <Tooltip
      placement="right"
      arrow
      componentsProps={{
        arrow: {
          style: {
            color: `#fff`,
          },
        },
      }}
      title={
        <SidebarTooltipContainer>
          <p>Please verify your account</p>
          <p>to visit these pages</p>
        </SidebarTooltipContainer>
      }
    >
      <SidebarDisabledItemOuter>
        <SidebarItemMain isDisabled={isDisabled} {...props}>
          <SidebarItemIcon isDisabled={isDisabled}>{icon}</SidebarItemIcon>
          <SidebarItemLabel isDisabled={isDisabled}>{label}</SidebarItemLabel>
        </SidebarItemMain>
      </SidebarDisabledItemOuter>
    </Tooltip>
  ) : (
    <SidebarItemOuter active={active} href={location}>
      <SidebarItemMain {...props}>
        <SidebarItemIcon>{icon}</SidebarItemIcon>
        <SidebarItemLabel>{label}</SidebarItemLabel>
      </SidebarItemMain>
    </SidebarItemOuter>
  );
};

export default SidebarItem;
