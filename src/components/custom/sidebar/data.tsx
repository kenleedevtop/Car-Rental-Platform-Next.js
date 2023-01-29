import React from 'react';

import {
  CampaignsIcon,
  ClientsIcon,
  HomeIcon,
  DiscoverIcon,
  FinanceIcon,
  ReportsIcon,
  SMLIcon,
  HelpIcon,
  AccountIcon,
  SurveyIcon,
} from 'components/svg';
import { TSidebarItem } from 'components/custom/sidebar/types';

export const DSidebarItems: Array<TSidebarItem> = [
  {
    id: 1,
    type: 'route',
    icon: <HomeIcon />,
    label: 'Home',
    location: '/',
    roles: ['ADMIN', 'INFLUENCER', 'CLIENT', 'AMBASADOR'],
  },
  {
    id: 2,
    type: 'nested',
    icon: <DiscoverIcon />,
    label: 'Discover',
    roles: ['ADMIN'],
    items: [
      {
        id: 13,
        label: 'Influencers',
        location: '/discover/influencers',
      },
      {
        id: 14,
        label: 'Clients',
        location: '/discover/clients',
      },
    ],
  },
  {
    id: 3,
    type: 'nested',
    icon: <ClientsIcon />,
    label: 'Users',
    roles: ['ADMIN'],
    items: [
      {
        id: 15,
        label: 'Influencers',
        location: '/users/influencers',
      },
      {
        id: 16,
        label: 'Clients',
        location: '/users/clients',
      },
      {
        id: 17,
        label: 'Ambassadors',
        location: '/users/ambassadors',
      },
    ],
  },
  {
    id: 4,
    type: 'route',
    icon: <CampaignsIcon />,
    label: 'Campaigns',
    location: '/campaigns',
    roles: ['ADMIN', 'INFLUENCER', 'CLIENT'],
  },
  {
    id: 5,
    type: 'route',
    icon: <ReportsIcon />,
    label: 'Reports',
    location: '/reports',
    roles: ['ADMIN', 'CLIENT'],
  },
  {
    id: 6,
    type: 'route',
    icon: <SMLIcon />,
    label: 'SML',
    location: '/sml',
    roles: ['ADMIN', 'CLIENT'],
  },
  {
    id: 7,
    type: 'route',
    icon: <SurveyIcon />,
    label: 'Surveys',
    location: '/surveys',
    roles: ['ADMIN', 'INFLUENCER', 'CLIENT'],
  },
  {
    id: 8,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Income',
    location: '/income',
    roles: ['INFLUENCER', 'AMBASADOR'],
  },
  {
    id: 9,
    type: 'route',
    icon: <SMLIcon />,
    label: 'Benefits',
    location: '/benefits',
    roles: ['INFLUENCER'],
  },

  {
    id: 10,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Finance',
    location: '/finance',
    roles: ['ADMIN'],
  },
  {
    id: 11,
    type: 'route',
    icon: <HelpIcon />,
    label: 'Help',
    location: '/help',
    roles: ['INFLUENCER', 'CLIENT', 'AMBASADOR'],
  },
  {
    id: 12,
    type: 'route',
    icon: <AccountIcon />,
    label: 'Account',
    location: '/account',
    roles: ['INFLUENCER', 'CLIENT', 'AMBASADOR'],
  },
];
