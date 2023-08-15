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
    icon: <HomeIcon />,
    label: 'Home',
    location: '/',
    roles: ['ADMIN', 'SUPERADMIN', 'INVESTOR'],
  },
  {
    id: 5,
    type: 'nested',
    icon: <UsersIcon />,
    label: 'Users',
    roles: ['ADMIN', 'SUPERADMIN'],
    items: [
      {
        id: 9,
        label: 'Investors',
        location: '/investors',
      },
      {
        id: 10,
        label: 'Developers',
        location: '/developers',
      },
    ],
  },
  {
    id: 2,
    type: 'route',
    icon: <DiscoverIcon />,
    label: 'Market',
    location: '/market',
    roles: ['ADMIN', 'SUPERADMIN', 'INVESTOR'],
  },
  {
    id: 3,
    type: 'route',
    icon: <PortfolioIcon />,
    label: 'Portfolio',
    location: '/portfolio',
    roles: ['ADMIN', 'SUPERADMIN', 'INVESTOR'],
  },
  {
    id: 4,
    type: 'route',
    icon: <DiscoverIcon />,
    label: 'Projects',
    location: '/',
    roles: ['DEVELOPER'],
  },
  {
    id: 6,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Finance',
    location: '/finance',
    roles: ['ADMIN', 'SUPERADMIN', 'INVESTOR'],
  },
  {
    id: 7,
    type: 'route',
    icon: <HelpIcon />,
    label: 'Help',
    location: '/help',
    roles: ['DEVELOPER', 'INVESTOR'],
  },
  {
    id: 8,
    type: 'route',
    icon: <AccountIcon />,
    label: 'Account',
    location: '/account',
    roles: ['ADMIN', 'SUPERADMIN', 'DEVELOPER', 'INVESTOR'],
  },
];
