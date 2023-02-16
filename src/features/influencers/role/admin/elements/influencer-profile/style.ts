import styled from '@emotion/styled';
import { Grid } from 'components/system';

export const InfluencerProfileModalMain = styled(Grid)`
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
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
  padding: 10px;
`;
