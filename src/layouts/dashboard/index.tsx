import React from 'react';
import {
  DashboardLayoutMain,
  DashboardLayoutNavbar,
  DashboardLayoutBox,
  DashboardLayoutSidebar,
  DashboardLayoutContainer,
  DashboardLayoutContent,
  DashboardLayoutWidgets,
} from 'layouts/dashboard/styles';
import { TDashboardLayoutProps } from 'layouts/dashboard/types';
import { CalendarCard, NotificationsCard } from 'components/custom';

const DashboardLayout = ({ children, ...props }: TDashboardLayoutProps) => (
  <DashboardLayoutMain {...props}>
    <DashboardLayoutNavbar />
    <DashboardLayoutBox>
      <DashboardLayoutSidebar />
      <DashboardLayoutContainer>
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
        <DashboardLayoutWidgets>
          <CalendarCard />
          <NotificationsCard />
        </DashboardLayoutWidgets>
      </DashboardLayoutContainer>
    </DashboardLayoutBox>
  </DashboardLayoutMain>
);

export default DashboardLayout;
