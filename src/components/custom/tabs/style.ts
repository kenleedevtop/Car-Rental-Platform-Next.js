import styled from '@emotion/styled';
import { Tab, Tabs, Theme } from '@mui/material';

export const TabsMain = styled(Tabs)<{ theme?: Theme }>`
  width: fit-content;
  cursor: pointer;
  min-height: 32px;
`;

export const TabsTab = styled(Tab)`
  text-transform: none;
  padding-top: 0px;
  min-height: 32px;
`;
