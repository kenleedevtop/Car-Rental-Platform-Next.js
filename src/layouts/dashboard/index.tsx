import React from 'react';
import {
  DashboardLayoutMain,
  DashboardLayoutNavbar,
  DashboardLayoutBox,
  DashboardLayoutSidebar,
  DashboardLayoutContainer,
  DashboardLayoutContainerOuter,
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
      <DashboardLayoutContainerOuter>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>{children}</DashboardLayoutContent>
          <DashboardLayoutWidgets>
            <CalendarCard />
            <NotificationsCard />
          </DashboardLayoutWidgets>
        </DashboardLayoutContainer>
      </DashboardLayoutContainerOuter>
    </DashboardLayoutBox>
  </DashboardLayoutMain>
);

export default DashboardLayout;
