import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';
import { Card } from 'components/ui';
import Link from 'next/link';

export const OverviewMain = styled(Stack)`
  display: grid;
`;

export const OverviewText = styled(Card)`
  display: grid;
  gap: 40px;
`;

export const OverviewTextContainer = styled.div`
  display: grid;
  gap: 15px;
`;

export const OverviewTextHeadline = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 20px;
    color: ${theme.palette.primary.main};
    font-weight: 700;
  `}
`;

export const OverviewTextSubHeadline = styled.div`
  font-size: 18px;
  color: #448dc9;
`;

export const OverviewTextContent = styled.div`
  font-size: 16px;
  color: #464e5f;
`;

export const OverviewPIContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  width: 100%;
`;

export const OverviewPILeft = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;

export const OverviewPILeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OverviewPILeftHeadline = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2d3779;
`;

export const OverviewPILeftItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const OverviewPILeftText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 50px;
`;

export const OverviewPILeftLabel = styled.div`
  font-size: 12px;
  color: #a7a9b6;
`;

export const OverviewPILeftValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #448dc9;
`;

export const OverviewPiLeftImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;

export const OverviewPIRight = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const OverviewPIRightContent = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
`;

export const OverviewPIRightItem = styled.div`
  display: grid;
  position: relative;
`;
export const OverviewPIRightLabel = styled.div`
  color: #a7a9b6;
  font-size: 12px;
`;
export const OverviewPIRightValue = styled.div`
  color: #448dc9;
  font-size: 14px;
  font-weight: 600;
`;

export const OverviewPIRightButton = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  padding: 8px 36px;
  border-radius: 8px;
  background: #2d3779;
  cursor: pointer;
`;

export const OverviewPIRightDelete = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const OverviewBackButton = styled(Link)<{ theme?: Theme }>`
  background: #f1f4ff;
  color: #7e839f;
  font-size: 12px;
  font-weight: 600;
  display: grid;
  place-items: center;
  text-decoration: none;
  padding: 7px 9px;
`;

export const OverviewGridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;

export const OverviewGridFirst = styled(Card)`
  display: grid;
  gap: 16px;
`;

export const OverviewGridSecond = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  ${OverviewPILeftItem} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const OverviewGridThird = styled(Card)`
  display: grid;
  gap: 16px;
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

  &:hover {
    ${CardProgressBarPopup} {
      display: grid;
    }
  }
`;
export const CardProgressBar = styled.div<{ fundPercent: number }>`
  ${({ fundPercent }) => `
    height: 12px;
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

export const OverviewGridTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const SimpleItemContainer = styled.div`
  display: grid;
  gap: 2.5px;
`;

export const SimpleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SimpleItemValue = styled.div`
  font-size: 12px;
  color: #a7a9b6;
`;

export const HeadlineContainer = styled.div`
  display: grid;
`;

export const TextList = styled.ul`
  padding-left: 20px;
`;

export const TextItem = styled.li`
  list-style: inside;
  color: #464e5f;
`;

export const AdvantagesContainer = styled.div`
  display: grid;
  gap: 10px;
  max-width: 33%;
`;

export const AdvantagesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdvantagesLabel = styled.div`
  font-size: 14px;
  color: #464e5f;
`;

export const AdvantagesValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #448dc9;
`;

export const CardProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardProgressValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #6aa5d5;
`;
export const CardProgressItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #7e839f;
`;
export const CardProgressAvailable = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #7e839f;
`;
