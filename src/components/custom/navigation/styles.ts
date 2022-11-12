import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Avatar, TextField } from 'components/ui';

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

export const NavigationProfile = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        gap: ${theme.spacing(3)};
        align-items: center;
        &::after {

        }
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
        border-radius: 12px;
        background-color: ${theme.palette.common.white}20;
        color: ${theme.palette.common.white};
    `}
`;

export const NavigationSearch = styled(TextField)``;
