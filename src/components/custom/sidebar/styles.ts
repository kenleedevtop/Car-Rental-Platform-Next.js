import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import Link from 'next/link';

export const SidebarMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 173px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(10)};
    align-items: center;
    padding: ${theme.spacing(5)} 0;
    background-color: ${theme.palette.common.white};
    `}
`;

export const SidebarLogoLink = styled(Link)`
  display: inline;
`;

export const SidebarLogo = styled.img`
  width: 100px;
  height: 54px;
`;

export const SidebarItems = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: ${theme.spacing(3.75)};
        padding-left: ${theme.spacing(2.5)};
    `}
`;
