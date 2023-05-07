import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Avatar, Search } from 'components/ui';
import { Menu } from 'components/custom';

export const NavigationMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
        padding: ${theme.spacing(5)} ${theme.spacing(10)};
        background-color: ${theme.palette.primary.main};
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${theme.spacing(10)};

        ${theme.breakpoints.down('lg')} {
          padding: ${theme.spacing(5)};
        }

        ${theme.breakpoints.down('sm')} {
          padding: ${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(
    5
  )} ${theme.spacing(2.5)};
          gap: 0;
        }
    `}
`;

export const NavigationRouteName = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        color: ${theme.palette.common.white};
        font-size: 18px;
        font-weight: 500;
        line-height: 1;

        ${theme.breakpoints.down('sm')} {
            font-size: 14px;
        }
    `}
`;

export const NavigationItems = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        gap: ${theme.spacing(10)};
        align-items: center;

        ${theme.breakpoints.down('lg')} {
          gap: ${theme.spacing(2.5)};
        }
    `}
`;

export const NavigationBalance = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        color: ${theme.palette.common.white};
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        background-color: ${theme.palette.common.white}10;
        padding: ${theme.spacing(2.5)} ${theme.spacing(5)};
        border-radius: 100vw;

        ${theme.breakpoints.down('sm')} {
          font-size: 10px;
        }
    `}
`;

export const NavigationNotification = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      display: none;

      ${theme.breakpoints.down('lg')} {
        display: grid;
        place-items: center;
        background-color: ${theme.palette.common.white}10;
        padding: ${theme.spacing(2)};
        border-radius: 35%;
      }

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing(1.5)};
      }
  `}
`;

export const NavigationProfileOuter = styled.div<{ theme?: Theme }>`
  position: relative;
`;

export const NavigationProfile = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        gap: ${theme.spacing(3)};
        align-items: center;
        cursor: pointer;
    `}
`;

export const NavigationProfileName = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        color: ${theme.palette.common.white};
        font-size: 14px;
        font-weight: 500;
        line-height: 1;

        ${theme.breakpoints.down('lg')} {
          display: none;
        }
    `}
`;

export const NavigationProfileImage = styled(Avatar)<{ theme?: Theme }>`
  ${({ theme }) => `
        background-color: ${theme.palette.common.white}20;
        color: ${theme.palette.common.white};
    `}
`;

export const NavigationSearch = styled(Search)<{ theme?: Theme }>``;

export const NavigationProfileDropdown = styled(Menu)<{ theme?: Theme }>`
  ${({ theme }) => `
      position: absolute;
      left: 0px;
      top: 100%;
      z-index: 200;
      width: 100%;

      ${theme.breakpoints.down('lg')} {
        left: unset;
        right: 0;
        width: 120px;
      }
  `}
`;

export const NavigationProvileIcon = styled.div<{
  theme?: Theme;
  expanded: boolean;
}>`
  ${({ theme, expanded }) => `
    width: 14px;
    height: 14px;
    transform: scaleY(${expanded ? -1 : 1});
    transition: transform 500ms ease-in-out;
    color: ${theme.palette.common.white};
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    `}
`;

export const BalanceIcon = styled.div<{
  theme?: Theme;
  expanded: boolean;
}>`
  ${({ theme, expanded }) => `
    width: 14px;
    height: 14px;
    transform: scaleY(${expanded ? -1 : 1});
    transition: transform 500ms ease-in-out;
    color: ${theme.palette.common.white};
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    `}
`;

export const NavigationMenu = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        align-items: center;
        gap: ${theme.spacing(5)};

        ${theme.breakpoints.down('sm')} {
          gap: 0;
        }
    `}
`;

export const NavigationMenuButton = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: none;
        place-items: center;
        padding: ${theme.spacing(2.5)};
        cursor: pointer;

        ${theme.breakpoints.down('lg')} {
          display: grid;
        }
    `}
`;

export const NavigationBalanceDropdown = styled(Menu)<{ theme?: Theme }>`
  ${({ theme }) => `
      position: absolute;
      right: 220px;
      top: 60px;
      z-index: 200;
      width: 150px;

      ${theme.breakpoints.down('lg')} {
        left: unset;
        right: 0;
        width: 120px;
      }
  `}
`;

export const NavigationCurrency = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      display: flex;
      align-items: center;
      gap: 5px;
      color: white;
      background-color: ${theme.palette.common.white}10;
      padding: ${theme.spacing(2.5)} ${theme.spacing(5)};
      border-radius: 100vw;
      font-size: 14px;
  `}
`;
