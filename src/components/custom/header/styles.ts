import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import Link from 'next/link';

export const HeaderMain = styled.header<{ theme?: Theme }>`
  ${({ theme }) => `
        position: fixed;
        top: 0;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${theme.breakpoints.up('xs')} {
          padding: 0 ${theme.spacing(5)};
        }
        ${theme.breakpoints.up('sm')} {
          padding: 0 ${theme.spacing(10)};
        }
        ${theme.breakpoints.down('md')} {
          background: #fff;
        }
        ${theme.breakpoints.up('md')} {
          background: transparent;
          padding: 0 ${theme.spacing(15)};
        }
        ${theme.breakpoints.up('lg')} {
          padding: 0 ${theme.spacing(25)};
        }
        ${theme.breakpoints.up('xl')} {
          padding: 0 ${theme.spacing(50)};
        }
        `}
`;

export const HeaderLogo = styled.img``;

export const HeaderActions = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  width: 225px;

  button {
    border-radius: 20rem;
    font-weight: 700;
  }

  ${theme.breakpoints.down('sm')} {
    width: 200px;
    button {
      font-size: 14px;
    }
  }
  ${theme.breakpoints.up('sm')} {
    button {
      font-size: 18px;
    }
  }
  `}
`;

export const HeaderAction = styled(Link)`
  text-decoration: none;
`;
