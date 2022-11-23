import React, { useState } from 'react';
import {
  NavigationMain,
  NavigationRouteName,
  NavigationItems,
  NavigationBalance,
  NavigationProfileOuter,
  NavigationProfile,
  NavigationProfileName,
  NavigationProfileImage,
  NavigationSearch,
  NavigationProfileDropdown,
  NavigationProvileIcon,
} from 'components/custom/navigation/styles';
import { TNavigationProps } from 'components/custom/navigation/types';
import { useAppContext } from 'context';
import { ArrowDownIcon, SearchIcon } from 'components/svg';
import { useMenu } from 'hooks';
import { useRouter } from 'next/router';

const Navigation = ({ ...props }: TNavigationProps) => {
  const [menuRef, open, setOpen] = useMenu(false);
  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleEnter = () => {
    const q = search.trim();
    if (q) {
      router.push({
        pathname: `/search`,
        query: { q },
      });
    }
  };

  const { role, routeName } = useAppContext();

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <NavigationMain {...props}>
      <NavigationRouteName>{routeName}</NavigationRouteName>
      <NavigationItems>
        {['admin', 'influencer'].includes(role) && (
          <NavigationSearch
            placeholder="Looking for someone?"
            value={search}
            onValue={setSearch}
            onEnter={handleEnter}
          />
        )}
        {['client', 'ambasador'].includes(role) && (
          <NavigationBalance>Balance: $499.00</NavigationBalance>
        )}
        <NavigationProfileOuter>
          <NavigationProfile onClick={handleMenu}>
            <NavigationProfileName>Ivan Jurisic</NavigationProfileName>
            <NavigationProfileImage image="https://static.intercomassets.com/avatars/5017590/square_128/NIX-1623671396.jpg">
              IJ
            </NavigationProfileImage>
            <NavigationProvileIcon expanded={open}>
              <ArrowDownIcon />
            </NavigationProvileIcon>
          </NavigationProfile>
          {open && (
            <NavigationProfileDropdown
              items={[
                {
                  icon: <SearchIcon />,
                  label: 'Account',
                  action: () => {
                    handleMenu();
                  },
                },
                {
                  icon: <SearchIcon />,
                  label: 'Logout',
                  action: () => {
                    handleMenu();
                  },
                },
              ]}
              ref={menuRef}
            />
          )}
        </NavigationProfileOuter>
      </NavigationItems>
    </NavigationMain>
  );
};

export default Navigation;
