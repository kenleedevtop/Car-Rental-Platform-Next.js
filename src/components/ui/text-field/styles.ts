import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const TextFieldMain = styled.div`
  width: 100%;
`;

export const TextFieldLabel = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.common.gray[8]};
    font-weight: 500;
    font-size: 14px;
    margin-bottom: ${theme.spacing(0.5)};
  `}
`;
