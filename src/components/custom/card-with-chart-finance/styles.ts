import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';
import { gradient } from 'utilities/style';

export const CardWithChartMain = styled(Card)<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    min-width: 0;
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
        background: ${gradient(45, [
          theme.palette.primary.dark,
          theme.palette.secondary.light,
        ])};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.palette.common.white};
        svg {
            display: block;
            width: 24px;
            height: 24px;
        }
        aspect-ratio: 1/1;
    `}
`;

export const CardWithChartTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 16px;
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
        display: flex;
        align-items: center;
        gap: ${theme.spacing(2)};
        svg {
          display: block;
          width: 16px;
          height: 16px;
        }
    `}
`;

export const CardWithChartGraph = styled.div<{ theme?: Theme }>`
  padding-bottom: 30px;
  border-bottom: 1px solid #dadce5;
`;

export const CardWithChartGraphContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;

export const CardWithChartGraphItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardWithChartGraphLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #448dc9;
`;

export const CardWithChartGraphValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #448dc9;
`;

export const CardWithChartHeadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
