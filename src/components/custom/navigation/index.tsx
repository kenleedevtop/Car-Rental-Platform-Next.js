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
  // NavigationSearch,
  BalanceIcon,
  NavigationBalanceDropdown,
  NavigationCurrency,
  NavigationProfileDropdown,
  NavigationProvileIcon,
  NavigationMenu,
  NavigationMenuButton,
  NavigationNotification,
} from 'components/custom/navigation/styles';
import { ProfilePicture } from 'components/custom/navigation/elements';
import { TNavigationProps } from 'components/custom/navigation/types';
import { useAppContext } from 'context';
import {
  AccountIcon,
  ArrowDownIcon,
  BellIcon,
  LogoutIcon,
  MenuIcon,
} from 'components/svg';
import { useMenu, useModal } from 'hooks';
import { useRouter } from 'next/router';

const Navigation = ({ ...props }: TNavigationProps) => {
  const [menuRef, open, setOpen] = useMenu(false);
  const [currencyRef, openR, setOpenR] = useMenu(false);

  // const [search, setSearch] = useState('');

  const [ppModal, openPpModal, closePpModal] = useModal(false);

  const [currency, setCurrency] = useState('CHF');

  const router = useRouter();

  // const handleEnter = () => {
  //   const q = search.trim();
  //   if (q) {
  //     router.push({
  //       pathname: `/search`,
  //       query: { q },
  //     });
  //   }
  // };

  const { logout, routeName, role, user, handleMobileMenu, showMobileMenu } =
    useAppContext();

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleCurrencyMenu = () => {
    setOpenR(!openR);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
    setOpen(!open);
  };

  const handleSidebar = () => {
    handleMobileMenu(!showMobileMenu);
  };

  return (
    <NavigationMain {...props}>
      <NavigationMenu>
        <NavigationMenuButton onClick={handleSidebar}>
          <MenuIcon />
        </NavigationMenuButton>
        <NavigationRouteName>{routeName}</NavigationRouteName>
      </NavigationMenu>
      <NavigationItems>
        {/* {['AMBASSADOR', 'INFLUENCER'].includes(role) && (
          <NavigationBalance>Balance: $499.00</NavigationBalance>
        )} */}

        {['AMBASSADOR', 'INFLUENCER', 'CLIENT'].includes(role) && (
          <>
            <NavigationCurrency onClick={handleCurrencyMenu}>
              Currency: {currency}{' '}
              <BalanceIcon expanded={openR}>
                {' '}
                <ArrowDownIcon />{' '}
              </BalanceIcon>{' '}
            </NavigationCurrency>
            {openR && (
              <NavigationBalanceDropdown
                items={[
                  {
                    icon: '€',
                    label: 'EUR',
                    action: () => {
                      setCurrency('EUR');
                      handleCurrencyMenu();
                    },
                  },
                  {
                    icon: '$',
                    label: 'USD',
                    action: () => {
                      setCurrency('USD');
                      handleCurrencyMenu();
                    },
                  },
                  {
                    icon: 'Fr',
                    label: 'CHF',
                    action: () => {
                      setCurrency('CHF');
                      handleCurrencyMenu();
                    },
                  },
                ]}
                ref={menuRef}
              />
            )}
          </>
        )}
        <NavigationNotification>
          <BellIcon />
        </NavigationNotification>
        <NavigationProfileOuter>
          <NavigationProfile onClick={handleMenu}>
            <NavigationProfileName>{`${user?.firstName} ${user?.lastName}`}</NavigationProfileName>
            {['CLIENT', 'ADMIN'].includes(role) && (
              <NavigationProfileImage image="https://static.intercomassets.com/avatars/5017590/square_128/NIX-1623671396.jpg">
                IJ
              </NavigationProfileImage>
            )}
            <NavigationProvileIcon expanded={open}>
              <ArrowDownIcon />
            </NavigationProvileIcon>
          </NavigationProfile>
          {open && ['ADMIN', 'SUPERADMIN'].includes(role) && (
            <NavigationProfileDropdown
              items={[
                {
                  icon: <AccountIcon />,
                  label: 'Account',
                  action: () => {
                    openPpModal();
                    handleMenu();
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
          {open && ['INFLUENCER', 'CLIENT', 'AMBASSADOR'].includes(role) && (
            <NavigationProfileDropdown
              items={[
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
