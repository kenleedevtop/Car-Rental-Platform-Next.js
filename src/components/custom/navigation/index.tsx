import React from 'react';
import {
  NavigationMain,
  NavigationRouteName,
  NavigationItems,
  NavigationBalance,
  NavigationProfile,
  NavigationProfileName,
  NavigationProfileImage,
  NavigationSearch,
} from 'components/custom/navigation/styles';
import { TNavigationProps } from 'components/custom/navigation/types';
import { usePageContext } from 'context';

const Navigation = ({ ...props }: TNavigationProps) => {
  const role = 'admin';

  const { routeName } = usePageContext();

  return (
    <NavigationMain {...props}>
      <NavigationRouteName>{routeName}</NavigationRouteName>
      <NavigationItems>
        {['admin', 'influencer'].includes(role) && (
          <NavigationSearch placeholder="Looking for someone?" />
        )}
        {['client'].includes(role) && (
          <NavigationBalance>Balance: $499.00</NavigationBalance>
        )}
        <NavigationProfile>
          <NavigationProfileName>Ivan Jurisic</NavigationProfileName>
          <NavigationProfileImage image="https://static.intercomassets.com/avatars/5017590/square_128/NIX-1623671396.jpg">
            IJ
          </NavigationProfileImage>
        </NavigationProfile>
      </NavigationItems>
    </NavigationMain>
  );
};

export default Navigation;
