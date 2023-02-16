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
  ServicesIcon,
} from 'components/svg';
import { TSidebarItem } from 'components/custom/sidebar/types';

export const DSidebarItems: Array<TSidebarItem> = [
  {
    id: 1,
    type: 'route',
    icon: <HomeIcon />,
    label: 'Home',
    location: '/',
    roles: ['ADMIN', 'INFLUENCER', 'CLIENT', 'AMBASSADOR'],
  },
  {
    id: 2,
    type: 'nested',
    icon: <DiscoverIcon />,
    label: 'Discover',
    roles: ['ADMIN'],
    items: [
      {
        id: 14,
        label: 'Influencers',
        location: '/discover/influencers',
      },
      {
        id: 15,
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
        id: 16,
        label: 'Influencers',
        location: '/users/influencers',
      },
      {
        id: 17,
        label: 'Clients',
        location: '/users/clients',
      },
      {
        id: 18,
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
    roles: ['INFLUENCER', 'CLIENT'],
  },
  {
    id: 5,
    type: 'route',
    icon: <ReportsIcon />,
    label: 'Reports',
    location: '/reports',
    roles: ['CLIENT'],
  },
  {
    id: 6,
    type: 'route',
    icon: <SMLIcon />,
    label: 'SML',
    location: '/sml',
    roles: ['CLIENT'],
  },
  {
    id: 7,
    type: 'route',
    icon: <SurveyIcon />,
    label: 'Surveys',
    location: '/surveys',
    roles: ['INFLUENCER', 'CLIENT'],
  },
  {
    id: 8,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Income',
    location: '/income',
    roles: ['INFLUENCER', 'AMBASSADOR'],
  },
  {
    id: 9,
    type: 'nested',
    icon: <ServicesIcon />,
    label: 'Services',
    roles: ['ADMIN'],
    items: [
      {
        id: 19,
        label: 'Campaigns',
        location: '/services/campaigns',
      },
      {
        id: 20,
        label: 'Reports',
        location: '/services/reports',
      },
      {
        id: 21,
        label: 'SML',
        location: '/services/sml',
      },
      {
        id: 22,
        label: 'Surveys',
        location: '/services/surveys',
      },
      {
        id: 23,
        label: 'Benefits',
        location: '/services/benefits',
      },
    ],
  },
  {
    id: 10,
    type: 'route',
    icon: <SMLIcon />,
    label: 'Benefits',
    location: '/benefits',
    roles: ['INFLUENCER'],
  },

  {
    id: 11,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Finance',
    location: '/finance',
    roles: ['ADMIN'],
  },
  {
    id: 12,
    type: 'route',
    icon: <HelpIcon />,
    label: 'Help',
    location: '/help',
    roles: ['INFLUENCER', 'CLIENT', 'AMBASSADOR'],
  },
  {
    id: 13,
    type: 'route',
    icon: <AccountIcon />,
    label: 'Account',
    location: '/account',
    roles: ['INFLUENCER', 'CLIENT', 'AMBASSADOR'],
  },
];
