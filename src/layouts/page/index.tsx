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
      setImage('/static/assets/images/login.png');
    } else if (pathname === '/register' && query.as === 'company') {
      setImage('/static/assets/images/register-company.png');
    } else if (pathname === '/register' && query.as === 'ambassador') {
      setImage('/static/assets/images/register-company.png');
    } else {
      setImage('/static/assets/images/register-influencer.png');
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
