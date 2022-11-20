import styled from '@emotion/styled';
import { Grid, Stack } from 'components/system';
import { Theme } from '@mui/material';

export const HomePageMain = styled(Stack)`
  width: 100%;
`;

export const HomePageCharts = styled.div`
  width: 100%;
`;

export const HomePageChartsLabel = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    font-weight: 600;
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.palette.primary.main};
    font-size: 16px;
    `}
`;

export const HomePageChartsGrid = styled(Grid)`
  width: 100%;
`;
