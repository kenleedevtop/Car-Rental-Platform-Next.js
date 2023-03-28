import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid } from 'components/system';

export const InfluencerProfileModalMain = styled(Grid)`
  width: 100%;
`;

export const InfluencerProfileChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  border: 1px solid #e9f0fc;
  border-right: unset;
  border-top: unset;
`;

export const InfluencerTitle = styled.div``;

export const InfluencerGrid = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacing(5)};
  `}
`;
