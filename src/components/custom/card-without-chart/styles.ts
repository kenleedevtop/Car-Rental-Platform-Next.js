import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

interface ICardWithoutChartIconProps {
  theme?: Theme;
  gray?: boolean;
}

export const CardWithoutChartMain = styled(Card)<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 160px;
    height: 121px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    min-width: 0;
  `}
`;

export const CardWithoutChartText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${theme.spacing(1)};
    `}
`;

export const CardWithoutChartIconProps = styled.div<ICardWithoutChartIconProps>`
  width: 42px;
  height: 42px;
  z-index: 3;
  border-radius: 50%;
  background: linear-gradient(to left bottom, #2d397b 15%, #2e71ae);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }): string => theme?.palette.common.white || ''};
  -moz-box-shadow: 2px 2px #888;
  -webkit-box-shadow: 2px 1px #888;
  box-shadow: 1.5px 1.5px #888;
  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
  aspect-ratio: 1/1;
`;

export const CardWithoutChartTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: ${theme.palette.primary.main};
        position: relative;
        display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
    `}
`;

export const CardWithoutChartValues = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 49px;
        height: 39px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing(1)};
        position: relative;
        left: 35%;
    `}
`;

export const CardWithoutChartCount = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 32px;
        font-weight: 700;
        line-height: 38.73px;
        color: ${theme.palette.primary.main};
        display: flex;
        align-items: center;
        gap: ${theme.spacing(3)};

        svg {
          display: block;
          width: 16px;
          height: 16px;
        }
    `}
`;

export const CardWithoutChartGraph = styled.div<{ theme?: Theme }>``;
