import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const NoteMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)}
    `}
`;

export const NoteText = styled.div`
  color: #7e839f;
  font-weight: 400;
`;
