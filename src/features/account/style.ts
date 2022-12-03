import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';
import { Card } from 'components/ui';

export const AccountMain = styled(Card)`
  height: 100%;
`;

export const AccountSpan = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.secondary.main};
    text-align: right;
    cursor: pointer;
    font-size: 9px;
 `}
`;

export const AccountChange = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
    gap: ${theme.spacing(2)}
  `}
`;
