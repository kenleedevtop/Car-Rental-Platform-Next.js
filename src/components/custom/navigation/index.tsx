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
  NavigationSpan,
  NavigationTooltipContainer,
} from 'components/custom/navigation/styles';
import {
  NotificationModal,
  ProfilePicture,
} from 'components/custom/navigation/elements';
import { TNavigationProps } from 'components/custom/navigation/types';
import { useAppContext } from 'context';
import {
  AccountIcon,
  ArrowDownIcon,
  BellIcon,
  InfoIcon,
  LogoutIcon,
  MenuIcon,
} from 'components/svg';
import { useMenu, useModal } from 'hooks';
import { useRouter } from 'next/router';
import Tooltip from '../tooltip';

const Navigation = ({ ...props }: TNavigationProps) => {
  const [menuRef, open, setOpen, buttonRef, position] = useMenu(false);
  const [currencyRef, openR, setOpenR, buttonRefC, positionC] = useMenu(false);

  // const [search, setSearch] = useState('');

  const [ppModal, openPpModal, closePpModal] = useModal(false);
  const [nModal, openNModal, closeNModal] = useModal(false);

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

  const {
    logout,
    routeName,
    role,
    user,
    handleMobileMenu,
    showMobileMenu,
    handleCurrencyChange,
    currency,
  } = useAppContext();

  const [currencyValue, setCurrency] = useState(currency);

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
        <NavigationRouteName>
          {routeName}
          <NavigationSpan>
            early access
            <Tooltip
              title={
                <NavigationTooltipContainer>
                  Welcome to Patients Influence Early Access! We&apos;re so
                  excited to have you join us on this journey. This is a special
                  sneak peek at our platform, so you might find some features
                  are still under development. Your experience matters to us. As
                  we grow, we&apos;re eagerly collecting feedback to enhance our
                  service. Don&apos;t hesitate to share your insights and
                  suggestions at <span>support@patientsinfluence.com</span>.
                  Your input is key in shaping a better and more effective
                  platform. Thank you for being a vital part of our community!
                </NavigationTooltipContainer>
              }
            >
              <div>
                <InfoIcon />
              </div>
            </Tooltip>
          </NavigationSpan>
        </NavigationRouteName>
      </NavigationMenu>
      <NavigationItems>
        {['AMBASSADOR', 'INFLUENCER'].includes(role) && (
          <NavigationBalance>Balance: CHF 0.00</NavigationBalance>
        )}

        {['AMBASSADOR', 'INFLUENCER', 'CLIENT'].includes(role) && (
          <>
            <NavigationCurrency onClick={handleCurrencyMenu}>
              Currency: {currency}{' '}
              <BalanceIcon ref={buttonRefC} expanded={openR}>
                {' '}
                <ArrowDownIcon />{' '}
              </BalanceIcon>{' '}
            </NavigationCurrency>
            {openR && (
              <NavigationBalanceDropdown
                position={positionC}
                items={[
                  {
                    icon: '€',
                    label: 'EUR',
                    action: () => {
                      setCurrency('EUR');
                      handleCurrencyChange('EUR');
                      handleCurrencyMenu();
                    },
                  },
                  {
                    icon: '$',
                    label: 'USD',
                    action: () => {
                      setCurrency('USD');
                      handleCurrencyChange('USD');
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
        <NavigationNotification onClick={openNModal}>
          <BellIcon />
        </NavigationNotification>
        <NavigationProfileOuter>
          <NavigationProfile onClick={handleMenu}>
            <NavigationProfileName>{`${user?.firstName} ${user?.lastName}`}</NavigationProfileName>
            {['ADMIN'].includes(role) && (
              <NavigationProfileImage image="https://static.intercomassets.com/avatars/5017590/square_128/NIX-1623671396.jpg">
                IJ
              </NavigationProfileImage>
            )}
            <NavigationProvileIcon ref={buttonRef} expanded={open}>
              <ArrowDownIcon />
            </NavigationProvileIcon>
          </NavigationProfile>
          {open && ['ADMIN', 'SUPERADMIN'].includes(role) && (
            <NavigationProfileDropdown
              // position={position}
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
              // position={position}
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
      {nModal && <NotificationModal onClose={closeNModal} />}
    </NavigationMain>
  );
};

export default Navigation;
