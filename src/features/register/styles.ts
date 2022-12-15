import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const RegisterTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 48px;
    font-weight: 700;
    color: ${theme.palette.primary.main}
  `}
`;
export const RegisterSubtitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 20px;
    color: ${theme.palette.primary.main}
  `}
`;
