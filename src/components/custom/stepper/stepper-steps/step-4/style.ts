import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const StepContainer = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    ${theme.breakpoints.down('xl')} {
      grid-template-rows: 1fr 1fr;
      gap: ${theme.spacing(5)};
    }

    ${theme.breakpoints.down('sm')} {
      grid-template-columns: 1fr;
      grid-template-rows: unset;
    }
  `}
`;

export const StepStack = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
      display: grid !important;
      grid-template-columns: 1fr;
    }
  `}
`;

export const StepTop = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      grid-column: 1/3;

      ${theme.breakpoints.down('xl')} {
        grid-column: 1/5;
      }

      ${theme.breakpoints.down('sm')} {
        grid-column: 1/9;
      }
    `}
`;
export const StepLeft = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      grid-column: 1/3;
      padding-right: ${theme.spacing(5)};

      ${theme.breakpoints.down('xl')} {
        grid-column: 1/5;
        grid-row: 1/2;
        padding-right: 0;
      }

      ${theme.breakpoints.down('sm')} {
        grid-column: 1/9;
        grid-row: unset;
      }
    `}
`;
export const StepFMiddle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      grid-column: 3/5;
      padding-right: ${theme.spacing(5)};
      padding-left: ${theme.spacing(5)};
      border-left: 1px solid ${theme.palette.default.main};
      border-right: 1px solid ${theme.palette.default.main};

      ${theme.breakpoints.down('xl')} {
        grid-column: 5/9;
        grid-row: 1/2;
        padding-right: 0;
        padding-left: 0;
        border: unset;
      }

      ${theme.breakpoints.down('sm')} {
        grid-column: 1/9;
        grid-row: unset;
      }
    `}
`;
export const StepSMiddle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      grid-column: 5/7;
      padding-right: ${theme.spacing(5)};
      padding-left: ${theme.spacing(5)};
      border-left: 1px solid ${theme.palette.default.main};
      border-right: 1px solid ${theme.palette.default.main};

      ${theme.breakpoints.down('xl')} {
        grid-column: 1/5;
        grid-row: 2/3;
        padding-right: 0;
        padding-left: 0;
        border: unset;
      }

      ${theme.breakpoints.down('sm')} {
        grid-column: 1/9;
        grid-row: unset;
      }
    `}
`;
export const StepRight = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      grid-column: 7/9;
      padding-left: ${theme.spacing(5)};

      ${theme.breakpoints.down('xl')} {
        grid-column: 5/9;
        grid-row: 2/3;
        padding-left: 0;
      }

      ${theme.breakpoints.down('sm')} {
        grid-column: 1/9;
        grid-row: unset;
      }
    `}
`;
