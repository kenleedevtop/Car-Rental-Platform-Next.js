import styled from '@emotion/styled';
import { Tab, Tabs, Theme } from '@mui/material';

export const TabsMain = styled(Tabs)<{ theme?: Theme }>`
  width: fit-content;
  cursor: pointer;
`;

export const TabsTab = styled(Tab)`
  text-transform: none;
`;
