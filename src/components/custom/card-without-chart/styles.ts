import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

interface CardWithoutChartIconProps {
  theme?: Theme;
  gray?: boolean;
}

export const CardWithoutChartMain = styled(Card)<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 150px;
    height: 121px;
    padding-left: 10px;
    padding-top: 10px;
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
        gap: ${theme.spacing(2)};
    `}
`;

export const CardWithoutChartIconProps = styled.div<CardWithoutChartIconProps>`
    width: 42px;
    height: 42px;
    z-index:3;
    border-radius: 50%;
    background: ${({ theme }): string => theme?.palette.primary.dark || ''};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }): string => theme?.palette.common.white || ''};
    svg {
      display: block;
      width: 24px;
      height: 24px;
    }
    aspect-ratio: 1/1;

    ${({ gray }): any =>
      gray &&
      css`
        position: relative;
        transform: translate(-115%, 5%);
        background-color: #999999;
        z-index:1;

      `}
`;

export const CardWithoutChartTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 16px;
        font-weight: 500;
        color: ${theme.palette.primary.main};
    `}
`;

export const CardWithoutChartValues = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing(1)};
    `}
`;

export const CardWithoutChartCount = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 32px;
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

export const CardWithoutChartGraph = styled.div<{ theme?: Theme }>``;