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
    `}
`;

export const NavigationRouteName = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        color: ${theme.palette.common.white};
        font-size: 18px;
        font-weight: 500;
        line-height: 1;
    `}
`;

export const NavigationItems = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        gap: ${theme.spacing(10)};
        align-items: center;
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
    `}
`;

export const NavigationProfileImage = styled(Avatar)<{ theme?: Theme }>`
  ${({ theme }) => `
        background-color: ${theme.palette.common.white}20;
        color: ${theme.palette.common.white};
    `}
`;

export const NavigationSearch = styled(Search)<{ theme?: Theme }>``;

export const NavigationProfileDropdown = styled(Menu)`
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 200;
  width: 100%;
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
