import React from 'react';
import {
  DashboardLayoutMain,
  DashboardLayoutNavbar,
  DashboardLayoutBox,
  DashboardLayoutSidebar,
  DashboardLayoutContent,
} from 'layouts/dashboard/styles';
import { TDashboardLayoutProps } from 'layouts/dashboard/types';

const DashboardLayout = ({ children, ...props }: TDashboardLayoutProps) => (
  <DashboardLayoutMain {...props}>
    <DashboardLayoutNavbar />
    <DashboardLayoutBox>
      <DashboardLayoutSidebar />
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </DashboardLayoutBox>
  </DashboardLayoutMain>
);

export default DashboardLayout;
