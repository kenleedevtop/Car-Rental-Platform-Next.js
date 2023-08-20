import React from 'react';

import {
  HomeIcon,
  DiscoverIcon,
  FinanceIcon,
  HelpIcon,
  AccountIcon,
  PortfolioIcon,
  UsersIcon,
} from 'components/svg';
import { TSidebarItem } from 'components/custom/sidebar/types';

export const DSidebarItems: Array<TSidebarItem> = [
  {
    id: 1,
    type: 'route',
    icon: <UsersIcon />,
    label: 'Users',
    location: '/',
    roles: ['ADMIN'],
  },
  {
    id: 2,
    type: 'route',
    icon: <DiscoverIcon />,
    label: 'Boats',
    location: '/boats',
    roles: ['ADMIN'],
  },
  {
    id: 3,
    type: 'route',
    icon: <DiscoverIcon />,
    label: 'Boats',
    location: '/',
    roles: ['USER'],
  },
  {
    id: 4,
    type: 'route',
    icon: <PortfolioIcon />,
    label: 'Applications',
    location: '/applications',
    roles: ['ADMIN'],
  },
  {
    id: 44,
    type: 'route',
    icon: <PortfolioIcon />,
    label: 'Booking',
    location: '/booking',
    roles: ['ADMIN', 'USER'],
  },
  // {
  //   id: 5,
  //   type: 'route',
  //   icon: <FinanceIcon />,
  //   label: 'Finance',
  //   location: '/finance',
  //   roles: ['ADMIN'],
  // },
  {
    id: 6,
    type: 'route',
    icon: <HelpIcon />,
    label: 'Help',
    location: '/help',
    roles: ['USER'],
  },
  {
    id: 7,
    type: 'route',
    icon: <AccountIcon />,
    label: 'Account',
    location: '/account',
    roles: ['ADMIN', 'USER'],
  },
];
