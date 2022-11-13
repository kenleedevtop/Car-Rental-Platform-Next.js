import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const CheckboxMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        align-items: center;
        gap: ${theme.spacing(2)}
    `}
`;

export const CheckboxLabel = styled.div``;
