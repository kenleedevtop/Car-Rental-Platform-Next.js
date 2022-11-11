import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const SidebarMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    height: 100vh;
    width: 173px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(10)};
    align-items: center;
    padding: ${theme.spacing(5)} 0;
    background: white;
    `}
`;

export const SidebarLogo = styled.img``;

export const SidebarItems = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: ${theme.spacing(3.75)};
        padding-left: ${theme.spacing(2.5)};
    `}
`;

export const SidebarDropDown = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        padding-left: ${theme.spacing(4)};
        margin-top: ${theme.spacing(3)};
    `}
`;

export const SidebarDropDownItem = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        padding: ${theme.spacing(1)} 0;
    `}
`;

export const SidebarItemIcon = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `   
    width: 24px;
    height: 24px;
    color: ${(theme.palette.common as any).gray[9]};

    svg{
        width: 100%;
        height: 100%;
    }
    `}
`;

export const SidebarItemLabel = styled.span<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 14px;
        color: ${(theme.palette.common as any).gray[9]};
    `}
`;

export const SidebarItem = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2.5)};
    border-radius: 10px 0 0 10px;
    cursor: pointer;
`}
`;

export const SidebarItemOuter = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    padding: ${theme.spacing(2.5)} 0 ${theme.spacing(2.5)} ${theme.spacing(5)};

    &:hover{
        background-color: ${(theme.palette.common as any).background};

        ${SidebarItemIcon}{
            color: ${theme.palette.secondary.main};
        }
        ${SidebarItemLabel}{
            color: ${theme.palette.primary.main};
        }
    }`}
`;
