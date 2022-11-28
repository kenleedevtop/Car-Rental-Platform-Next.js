import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid, Stack } from 'components/system';

export const IncomePageMain = styled(Stack)`
  width: 100%;
`;

export const IncomePageCharts = styled.div`
  width: 100%;
`;

export const IncomePageChartsGrid = styled(Grid)`
  width: 100%;
`;

export const IncomePageFilter = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}20;
        padding: ${theme.spacing(5)};
    `}
`;

export const IncomePageFilterActions = styled(Stack)<{
  theme?: Theme;
}>`
  justify-content: flex-end;
  & > * {
    min-width: 100px;
  }
`;

export const IconBackground = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 37.5px;
    height: 37.5px;
    border-radius: 37.5px;
    background: ${theme.palette.primary.main};
    display: grid;
    place-items: center;

    * {
      fill: #fff
    }
  `}
`;
