import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const IndicatorIcon = styled.svg`
  fill: currentColor;
  width: 6px;
  height: 5px;
`;

export const IndicatorMain = styled.div<{
  theme?: Theme;
  percent: number;
}>`
  ${({ theme, percent }) => `
        padding: ${theme.spacing(0.25)} ${theme.spacing(2)};
        height:13px;
        width:23px;
        background-color: ${percent >= 0 ? '#2FD1C6' : '#E53B3B'}50;
        border-radius: 4px;
        color: ${percent >= 0 ? '#2FD1C6' : '#E53B3B'};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
        gap: ${theme.spacing(1)};
        ${IndicatorIcon} {
            transform: rotate(${percent >= 0 ? 0 : 180}deg);
        }
    `}
`;

export const IndicatorValue = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
