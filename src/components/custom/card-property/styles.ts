import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';
import Link from 'next/link';
import Menu from '../menu';

export const CardMain = styled(Card)`
  display: grid;
  padding: 0 !important;
  position: relative;
`;

export const CardCompletedMark = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  background: #7e839f;
  color: #fff;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardHead = styled.div`
  min-height: 60px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e7ecff;
`;

export const CardPrice = styled.div`
  display: grid;
  color: #6d728e;
  font-size: 16px;
`;

export const CardPriceValue = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    font-size: 20px;
    font-weight: 700;
  `}
`;

export const CardBids = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  color: #6d728e;
  font-size: 16px;
  font-variant: small-caps;
`;

export const CardBidsValue = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 24px;
    color: ${theme.palette.primary.main};
    font-weight: 700;
  `}
`;

export const CardType = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  color: #6d728e;
  font-size: 16px;
  font-variant: small-caps;
`;

export const CardTypeValue = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    font-size: 24px;
    font-weight: 600;
  `}
`;

export const CardBody = styled.div`
  padding: 15px;
  display: grid;
  gap: 15px;
`;

export const CardAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7e839f;
  font-size: 16px;
`;
export const CardAddressSmall = styled.img``;

export const CardTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 18px;
    font-weight: 700;
    color: ${theme.palette.primary.main};
  `}
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
    height: 10px;
    width: 100%;
    border-radius: 8px;
    background: #E7ECFF;
    position:relative;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: #6AA5D5;
      width: ${fundPercent}%;
      border-radius: 8px;
    }
  
  `}
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
  width: 100%;
  justify-content: space-between;
`;
export const CardProgressAvailable = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #7e839f;
`;
export const CardProgressAvailableValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #6aa5d5;
`;

export const CardButton = styled(Link)<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    font-size: 16px;
    font-weight: 700;
    padding: 10px 0;
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
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

export const CardDropdown = styled.div`
  width: 100%;
  background: #37428a;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  display: grid;
  gap: 10px;
`;

export const TableMenu = styled(Menu)<{
  position: { right: number; top: number };
}>`
  ${({ position }) => `
    position: fixed;
    z-index: 200;
    width: 120px;
    right: ${position?.right}px;
    top: ${position?.top}px;

    &:last-child,
    &:first-child {
      grid-template-columns: 1fr;
    }

    .MenuItem {
      grid-template-columns: 1fr;
    }
    `}
`;

export const ISpan = styled.span`
  display: block;
  width: 100%;
  height: 100%;
`;
