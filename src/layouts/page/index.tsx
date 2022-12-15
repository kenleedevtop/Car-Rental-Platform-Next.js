import React from 'react';

import { TPageLayoutProps } from 'layouts/page/type';
import {
  PageLayoutMain,
  PageLayoutLeft,
  PageLayoutRight,
  PageLayoutContent,
} from 'layouts/page/styles';
import { Header } from 'components/custom';

const PageLayout = ({ children, ...props }: TPageLayoutProps) => (
  <PageLayoutMain {...props}>
    <Header />
    <PageLayoutContent>
      <PageLayoutLeft>{children}</PageLayoutLeft>
      <PageLayoutRight src="https://www.rheumatology.org/portals/0/Images/Health%20Care%20Team/Patient-Role.jpg" />
    </PageLayoutContent>
  </PageLayoutMain>
);

export default PageLayout;
