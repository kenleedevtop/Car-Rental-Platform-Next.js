import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid, Stack } from 'components/system';

export const SignUpMain = styled(Grid)<{ theme?: Theme }>`
  ${({ theme }) => `
  width: 100%;
  place-items: center;
  padding: 0 ${theme.spacing(10)} ${theme.spacing(10)};
  `}
`;

export const SignUpTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 48px;
    font-weight: 700;
    color: ${theme.palette.primary.main};
    margin-bottom: ${theme.spacing(2.5)};
    `}
`;

export const SignUpText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  font-size: 20px;
  text-align: center;
  color: #6D728E;
  margin-bottom: ${theme.spacing(10)};
  line-height: 30px;
  `}
`;

export const SignUpActions = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
  display: flex;
  justify-content: center;

  button {
    padding: ${theme.spacing(5)} ${theme.spacing(16)};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
  }

  `}
`;
