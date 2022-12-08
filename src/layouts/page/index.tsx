import React from 'react';

import { TPageProps } from 'layouts/page/type';
import { PageMain, PageLeft, PageRight } from 'layouts/page/styles';

const Page = ({ image, children, ...props }: TPageProps) => (
  <PageMain {...props}>
    <PageLeft>{children}</PageLeft>
    <PageRight src={image} />
  </PageMain>
);

export default Page;
