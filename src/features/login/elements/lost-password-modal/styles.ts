import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid } from 'components/system';

export const LostPasswordModalMain = styled(Grid)<{ theme?: Theme }>`
  ${({ theme }) => `
  width: 100%;
  place-items: center;
  padding: 0 ${theme.spacing(10)} ${theme.spacing(10)};

  button {
    width: 50%;
    padding: ${theme.spacing(2.5)};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    margin: ${theme.spacing(5)} 0;
  }

`}
`;

export const LostPasswordTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  font-size: 48px;
  font-weight: 700;
  color: ${theme.palette.primary.main};
  margin-bottom: ${theme.spacing(2.5)};
  `}
`;

export const LostPasswordText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
font-size: 20px;
text-align: center;
color: #6D728E;
margin-bottom: ${theme.spacing(10)};
line-height: 30px;
`}
`;
