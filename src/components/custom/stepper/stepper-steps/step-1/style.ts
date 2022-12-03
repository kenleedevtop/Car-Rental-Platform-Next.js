import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import Stack from '@mui/material/Stack/Stack';

export const StepSpan = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.secondary.main};
    text-align: right;
    cursor: pointer;
    font-size: 9px;
 `}
`;

export const StepChange = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
    gap: ${theme.spacing(2)}
  `}
`;
