import { Avatar } from 'components/ui';
import React from 'react';
import { Status } from 'components/custom';

import {
  CampaignsCardMain,
  CampaignsCardInfo,
  CampaignsCardCompany,
  CampaignsCardApp,
} from 'components/custom/campaigns-card/styles';

import { TCampaignsCardProps } from 'components/custom/campaigns-card/types';

const CampaignsCard = ({
  company,
  app,
  status,
  ...props
}: TCampaignsCardProps) => (
  <CampaignsCardMain>
    <Avatar image="https://static.intercomassets.com/avatars/5017590/square_128/NIX-1623671396.jpg" />
    <CampaignsCardInfo>
      <CampaignsCardCompany>{company}</CampaignsCardCompany>
      <CampaignsCardApp>{app}</CampaignsCardApp>
    </CampaignsCardInfo>
    <Status color={status.color} text={status.text} />
  </CampaignsCardMain>
);

export default CampaignsCard;
