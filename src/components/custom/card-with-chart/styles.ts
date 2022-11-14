import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

export const CardWithChartMain = styled(Card)<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `}
`;

export const CardWithChartText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${theme.spacing(2)};
    `}
`;

export const CardWithChartIcon = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${theme.palette.primary.main};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.palette.common.white};
        svg {
            display: block;
            width: 24px;
            height: 24px;
        }
    `}
`;

export const CardWithChartTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 18px;
        font-weight: 500;
        color: ${theme.palette.primary.main};
    `}
`;

export const CardWithChartValues = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${theme.spacing(5)};
    `}
`;

export const CardWithChartCount = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 18px;
        font-weight: 700;
        color: ${theme.palette.primary.main};
    `}
`;

export const CardWithChartGraph = styled.div<{ theme?: Theme }>``;
