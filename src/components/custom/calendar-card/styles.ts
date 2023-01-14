import styled from '@emotion/styled';
import { CardWithText } from 'components/custom';
import { IconButton, Theme } from '@mui/material';
import { Grid } from 'components/system';

export const CalendarCardMain = styled(CardWithText)<{ theme?: Theme }>``;

export const CalendarCardGrid = styled(Grid)<{ theme?: Theme }>`
  ${({ theme }) => `
    border-radius: 4px;
    width: 100%;
    border: 1px solid ${theme.palette.common.black}00;
    gap: 1px;
    background-color: ${theme.palette.common.black}20;
    overflow: hidden;
  `}
`;

export const CalendarCardCell = styled.div<{
  theme?: Theme;
}>`
  ${({ theme }) => `
    width: 100%;
    padding: ${theme.spacing(1.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.common.white};
    cursor: pointer;
    user-select: none;
    transition: background-color 150ms ease-in-out;
    &:hover {
      background-color: ${theme.palette.common.gray[0]};
    }
  `}
`;

export const CalendarCardCellDate = styled.div<{
  theme?: Theme;
  currentMonth: boolean;
  today: boolean;
}>`
  ${({ theme, currentMonth, today }) => `
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 14px;
    ${
      currentMonth
        ? `
      background-color: ${
        today ? theme.palette.primary.main : `${theme.palette.primary.main}00`
      };
    `
        : `
      background-color: ${
        today
          ? theme.palette.common.gray[2]
          : `${theme.palette.common.gray[2]}00`
      };
    `
    }
    ${
      currentMonth
        ? `
      color: ${today ? theme.palette.common.white : theme.palette.primary.main};
    `
        : `
      color: ${
        today ? theme.palette.common.gray[8] : theme.palette.common.gray[2]
      };
    `
    }
  `}
`;

export const CalendarCardDay = styled.div<{
  theme?: Theme;
  weekend?: boolean;
}>`
  ${({ theme, weekend }) => `
    width: 100%;
    padding: ${theme.spacing(2)} 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.common.white};
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    color: ${weekend ? theme.palette.error.main : theme.palette.common.gray[6]};
  `}
`;

export const CalendarCardDays = styled(Grid)`
  width: 100%;
  gap: 0;
`;

export const CalendarTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1)};
  `}
`;

export const CalendarExpand = styled(IconButton)<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 20px;
    height: 20px;
    padding: 0;
    padding: ${theme.spacing(0.5)};
    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  `}
`;
