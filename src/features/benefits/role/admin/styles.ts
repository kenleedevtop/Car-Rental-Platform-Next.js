import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid, Stack } from 'components/system';

export const BenefitsPageMain = styled(Stack)<{ theme?: Theme }>``;

export const BenefitsPageCharts = styled(Grid)<{ theme?: Theme }>`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 20px;

  & > * {
    min-width: 250px !important;
    width: 250px !important;
  }
`;

export const BenefitsPageFilter = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}20;
        padding: ${theme.spacing(5)};
    `}
`;

export const BenefitsPageFilterActions = styled(Stack)<{
  theme?: Theme;
}>`
  justify-content: flex-end;
  & > * {
    min-width: 100px;
  }
`;
