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
import { ProfilePicture } from 'components/custom/navigation/elements';
import { TNavigationProps } from 'components/custom/navigation/types';
import { useAppContext } from 'context';
import { AccountIcon, ArrowDownIcon, LogoutIcon } from 'components/svg';
import { useMenu, useModal } from 'hooks';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Navigation = ({ ...props }: TNavigationProps) => {
  const [menuRef, open, setOpen] = useMenu(false);
  const [search, setSearch] = useState('');

  const [ppModal, openPpModal, closePpModal] = useModal(false);

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

  const handleLogout = () => {
    Cookies.remove('x-auth-token');
    router.push('/login');
    setOpen(!open);
  };

  return (
    <NavigationMain {...props}>
      <NavigationRouteName>{routeName}</NavigationRouteName>
      <NavigationItems>
        {['admin'].includes(role) && (
          <NavigationSearch
            placeholder="Looking for someone?"
            value={search}
            onValue={setSearch}
            onEnter={handleEnter}
          />
        )}
        {['ambasador', 'influencer'].includes(role) && (
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
                  icon: <AccountIcon />,
                  label: 'Account',
                  action: () => {
                    handleMenu();
                    openPpModal();
                  },
                },
                {
                  icon: <LogoutIcon />,
                  label: 'Logout',
                  action: handleLogout,
                },
              ]}
              ref={menuRef}
            />
          )}
        </NavigationProfileOuter>
      </NavigationItems>
      {ppModal && <ProfilePicture onClose={closePpModal} />}
    </NavigationMain>
  );
};

export default Navigation;
