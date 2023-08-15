import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid, Stack } from 'components/system';
import { Card } from 'components/ui';

export const FinancePageMain = styled(Stack)<{ theme?: Theme }>``;

export const FinancePageCharts = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacing(5)};

    ${theme.breakpoints.down('xl')} {
      grid-template-columns: 1fr 1fr;
    }
    ${theme.breakpoints.down('sm')} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const FinancePageFilter = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}20;
        padding: ${theme.spacing(5)};
    `}
`;

export const FinancePageFilterActions = styled(Stack)<{
  theme?: Theme;
}>`
  justify-content: flex-end;
  & > * {
    min-width: 100px;
  }
`;

export const FinanceHeadline = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 16px;
    font-weight: 600;
    color: ${theme.palette.primary.main};
  `}
`;

export const FinanceCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px;
`;

export const FinanceCardLeft = styled(Stack)`
  padding-right: 100px;
  border-right: 1px solid #e9f0fc;
`;

export const FinanceCardRight = styled(Stack)`
  padding-left: 100px;
`;

export const DepositHeadline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font: 12px;
  font-weight: 600;
  color: #7e839f;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const DepositList = styled.ul`
  color: #7e839f;
`;

export const DepositItem = styled.li`
  margin-left: 20px;
`;

export const WithdrawSpan = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #7e839f;
  margin-top: -15px;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const WithdrawInputGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  place-items: flex-end;
  gap: 10px;
`;
