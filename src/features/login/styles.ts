import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const LoginMain = styled.div`
  button {
    border-radius: 20rem;
  }

  .css-1xqz3x8-InputMain {
    width: 100%;
  }
`;

export const LoginTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 48px;
    font-weight: 700;
    color: ${theme.palette.primary.main};
    `}
`;

export const LoginSubtitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 20px;
    color: ${theme.palette.primary.main}
`}
`;

export const LoginSpan = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    cursor: pointer;
`}
`;

export const LoginAction = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
    }
  `}
`;
