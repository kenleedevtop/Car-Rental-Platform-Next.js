import React, { useState } from 'react';
import {
  NavigationMain,
  NavigationRouteName,
  NavigationItems,
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
import {
  NotificationModal,
  ProfilePicture,
} from 'components/custom/navigation/elements';
import { TNavigationProps } from 'components/custom/navigation/types';
import { useAppContext } from 'context';
import { ArrowDownIcon, BellIcon, LogoutIcon, MenuIcon } from 'components/svg';
import { useMenu, useModal } from 'hooks';
import { useRouter } from 'next/router';
import { ClickAwayListener, Grow, Paper, Popper } from '@mui/material';

const handleCurrencyCalculation = (
  amount: number,
  currency: 'EUR' | 'USD' | 'CHF' = 'CHF'
): number => {
  let formattedAmount = 0;

  if (currency === 'EUR') {
    formattedAmount = amount * 1.03;
  }
  if (currency === 'USD') {
    formattedAmount = amount * 1.11;
  }

  if (currency === 'CHF') {
    formattedAmount = amount; // Assumes the amount is already in euros for other currencies
  }

  return +formattedAmount.toFixed(2);
};

const Navigation = ({ ...props }: TNavigationProps) => {
  const [menuRef, open, setOpen, buttonRef] = useMenu(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const currencyTargRef = React.useRef<HTMLDivElement>(null);
  const [
    openBalanceButton,
    setOpenBalanceButton,
    balanceButtonRef,
    positionBalanceButton,
  ] = useMenu(false);

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

  const [balance, setBalance] = useState(0);
  const [formattedBalance, setFormattedBalance] = useState(0);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleBalanceMenuClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    setOpenBalanceButton(false);
  };

  const handleCurrencyAndBalanceChange = (
    currencyVal: 'EUR' | 'USD' | 'CHF'
  ) => {
    handleCurrencyChange(currencyVal);
    setOpenBalanceButton(false);

    setFormattedBalance(() => handleCurrencyCalculation(balance, currencyVal));
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
        {['INVESTOR', 'INFLUENCER'].includes(role) && (
          <NavigationCurrency
            onClick={() => setOpenBalanceButton(!openBalanceButton)}
          >
            Balance: {currency} {formattedBalance.toFixed(2)}
            <BalanceIcon ref={balanceButtonRef} expanded={openBalanceButton}>
              <ArrowDownIcon />
            </BalanceIcon>
            <Popper
              open={openBalanceButton}
              anchorEl={anchorRef.current}
              role={undefined}
              style={{
                position: 'absolute',
                top: '45px',
                left: '45px',
              }}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleBalanceMenuClose}>
                      <NavigationBalanceDropdown
                        position={positionBalanceButton}
                        items={[
                          {
                            icon: '€',
                            label: 'EUR',
                            action: () => {
                              handleCurrencyAndBalanceChange('EUR');
                            },
                          },
                          {
                            icon: '$',
                            label: 'USD',
                            action: () => {
                              handleCurrencyAndBalanceChange('USD');
                            },
                          },
                          {
                            icon: 'Fr',
                            label: 'CHF',
                            action: () => {
                              handleCurrencyAndBalanceChange('CHF');
                            },
                          },
                        ]}
                        ref={menuRef}
                      />
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </NavigationCurrency>
        )}

        <NavigationNotification onClick={openNModal}>
          <BellIcon />
        </NavigationNotification>
        <NavigationProfileOuter>
          <NavigationProfile onClick={handleMenu}>
            <NavigationProfileName>{`${user?.firstName} ${user?.lastName}`}</NavigationProfileName>
            {/* {['ADMIN'].includes(role) && (
              <NavigationProfileImage image="https://static.intercomassets.com/avatars/5017590/square_128/NIX-1623671396.jpg">
                IJ
              </NavigationProfileImage>
            )} */}
            <NavigationProvileIcon ref={buttonRef} expanded={open}>
              <ArrowDownIcon />
            </NavigationProvileIcon>
          </NavigationProfile>
          {open && ['ADMIN', 'USER'].includes(role) && (
            <NavigationProfileDropdown
              items={[
                // {
                //   icon: <AccountIcon />,
                //   label: 'Account',
                //   action: () => {
                //     openPpModal();
                //     handleMenu();
                //   },
                // },
                {
                  icon: <LogoutIcon />,
                  label: 'Logout',
                  action: handleLogout,
                },
              ]}
              ref={menuRef}
            />
          )}
          {open && ['INFLUENCER', 'DEVELOPER', 'INVESTOR'].includes(role) && (
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
      {nModal && <NotificationModal onClose={closeNModal} />}
    </NavigationMain>
  );
};

export default Navigation;
