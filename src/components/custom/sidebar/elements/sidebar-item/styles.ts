import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import Link from 'next/link';

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

export const SidebarItemMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2.5)};
    border-radius: 10px 0 0 10px;
    cursor: pointer;
`}
`;

export const SidebarItemOuter = styled(Link)<{
  theme?: Theme;
  active: boolean;
}>`
  ${({ theme, active }) => `
    user-select: none;
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    padding: ${theme.spacing(2.5)} 0 ${theme.spacing(2.5)} ${theme.spacing(5)};
    display: block;
    text-decoration: none;
    ${
      active &&
      `
        background-color: ${theme.palette.common.background};
        ${SidebarItemIcon}{
            color: ${theme.palette.secondary.main};
        }
        ${SidebarItemLabel}{
            color: ${theme.palette.primary.main};
        }
    `
    }
    `}
`;
