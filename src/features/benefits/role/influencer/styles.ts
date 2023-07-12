import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid, Stack } from 'components/system';

export const BenefitsPageMain = styled(Stack)<{ theme?: Theme }>``;

export const BenefitsPageCharts = styled(Grid)<{ theme?: Theme }>`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 20px;

  & > div {
    height: 101px;
    min-width: 170px !important;
    width: 170px !important;
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
  ${({ theme }) => `
    justify-content: flex-end;
    & > * {
      min-width: 100px;
    }

    ${theme.breakpoints.down('sm')} {
      display: grid;
      grid-template-columns: 1fr;
      gap: ${theme.spacing(5)};
    } 
`}
`;

export const BenefitsPageFilterContainer = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing(5)};

    ${theme.breakpoints.down('xl')} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.breakpoints.down('lg')} {
      grid-template-columns: repeat(4, 1fr);
    }
    
    ${theme.breakpoints.down('lg')} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.breakpoints.down('sm')} {
      grid-template-columns: 1fr;
    }
  `}
`;
