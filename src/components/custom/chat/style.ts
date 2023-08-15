import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ChatMain = styled.div<{ theme?: Theme }>`
  width: 100%;
`;

export const ChatMessages = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
        height: 100%;
        border: 1px solid ${theme.palette.default.main};
        border-top-left-radius: ${theme.spacing(5)};
        border-top-right-radius: ${theme.spacing(5)};
        min-height: 250px;
        max-height: 250px;
        overflow-y: scroll;
        padding: ${theme.spacing(7.5)} ${theme.spacing(2.5)};
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing(5)};
    `}
`;
