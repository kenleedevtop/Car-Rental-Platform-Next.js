import styled from '@emotion/styled';
import { Grid, Stack } from 'components/system';
import { Theme } from '@mui/material';

export const HomePageMain = styled(Stack)`
  width: 100%;
`;

export const HomePageCharts = styled.div`
  width: 100%;
`;

export const HomePageChartsLabel = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    font-weight: 600;
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.palette.primary.main};
    font-size: 16px;
    `}
`;

export const HomePageChartsGrid = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing(5)};

  ${theme.breakpoints.down('xl')} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
  }
`}
`;

export const HomeInfluencerPageGrid = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacing(5)};

      
      ${theme.breakpoints.down('xl')} {
        grid-template-columns: 1fr;
      }
  `}
`;

export const HomeItem = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      `}
`;

export const InvestorHomePageChartsGrid = styled.div<{ theme?: Theme }>`
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

export const InvestorHomePageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const InvestorHomePageMarketGrid = styled.div`
  display: grid;
`;

export const InvestorHomePageMarketItem = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e9f0fc;
  border-radius: 8px;
`;

export const InvestorHomePageMarketContent = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 8px;
`;

export const InvestorHomePageMarketImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;
export const InvestorHomePageMarketContainer = styled.div`
  display: grid;
`;

export const InvestorHomePageMarketItemHeadLine = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #464e5f;
`;
export const InvestorHomePageMarketItemAddress = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #a7a9b6;
`;
export const InvestorHomePageProgressbar = styled.div`
  width: 250px;
  height: 16px;
`;

export const InvestorHomePagePrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #a6a9b6;
`;

export const CardProgressBarPopup = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  display: none;
  gap: 10px;
  position: absolute;
  max-width: 200px;
  width: 100%;
  z-index: 999;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  right: 0;
  top: 0;
`;

export const CardProgress = styled.div`
  display: grid;
  gap: 10px;
  position: relative;
  margin-bottom: 20px;

  &:hover {
    ${CardProgressBarPopup} {
      display: grid;
    }
  }
`;
export const CardProgressBar = styled.div<{ fundPercent: number }>`
  ${({ fundPercent }) => `
    height: 16px;
    width: 100%;
    border-radius: 4px;
    background: #E7ECFF;
    position:relative;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: #6AA5D5;
      width: ${fundPercent}%;
      border-radius: 4px;
    }
  
  `}
`;

export const CardProgressBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardProgressBarPopupLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #6aa5d5;
`;
export const CardProgressBarPopupVaue = styled.div`
  font-size: 16px;
  color: #7e839f;
`;
