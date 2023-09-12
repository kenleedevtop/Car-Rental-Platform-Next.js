import React from 'react';

import { TPageLayoutProps } from 'layouts/page/type';
import {
  PageLayoutMain,
  PageLayoutLeft,
  PageLayoutRight,
  PageLayoutContent,
  PageLayoutRightContainer,
} from 'layouts/page/styles';
import { Header } from 'components/custom';

const PageLayout = ({ children, ...props }: TPageLayoutProps) => (
  <PageLayoutMain {...props}>
    <Header />
    <PageLayoutContent>
      <PageLayoutLeft>{children}</PageLayoutLeft>
      <PageLayoutRightContainer>
        <PageLayoutRight
          key={0}
          src="/static/assets/images/authorization.jpg"
        />
      </PageLayoutRightContainer>
    </PageLayoutContent>
  </PageLayoutMain>
);

export default PageLayout;
