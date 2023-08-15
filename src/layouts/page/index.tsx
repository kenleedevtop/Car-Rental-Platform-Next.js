import React from 'react';

import { TPageLayoutProps } from 'layouts/page/type';
import {
  PageLayoutMain,
  PageLayoutLeft,
  PageLayoutRight,
  PageLayoutContent,
} from 'layouts/page/styles';
import { Header } from 'components/custom';
// import { useRouter } from 'next/router';

const PageLayout = ({ children, ...props }: TPageLayoutProps) => (
  <PageLayoutMain {...props}>
    <Header />
    <PageLayoutContent>
      <PageLayoutLeft>{children}</PageLayoutLeft>
      <PageLayoutRight key={0} src="/static/assets/images/authorization.jpg" />
    </PageLayoutContent>
  </PageLayoutMain>
);

export default PageLayout;
