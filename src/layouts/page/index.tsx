import React, { useEffect, useState } from 'react';

import { TPageLayoutProps } from 'layouts/page/type';
import {
  PageLayoutMain,
  PageLayoutLeft,
  PageLayoutRight,
  PageLayoutContent,
} from 'layouts/page/styles';
import { Header } from 'components/custom';
import { useRouter } from 'next/router';

const PageLayout = ({ children, ...props }: TPageLayoutProps) => {
  const { pathname, query } = useRouter();
  const [image, setImage] = useState<null | string>(null);

  useEffect(() => {
    if (pathname === '/login') {
      setImage('/assets/images/login.png');
    } else if (pathname === '/register' && query.as === 'company') {
      setImage('/assets/images/register-company.png');
    } else if (pathname === '/register' && query.as === 'ambassador') {
      setImage('/assets/images/register-company.png');
    } else {
      setImage('/assets/images/register-influencer.png');
    }
  }, [pathname, query]);

  return (
    <PageLayoutMain {...props}>
      <Header />
      <PageLayoutContent>
        <PageLayoutLeft>{children}</PageLayoutLeft>
        {image && <PageLayoutRight key={image} src={image} />}
      </PageLayoutContent>
    </PageLayoutMain>
  );
};

export default PageLayout;
