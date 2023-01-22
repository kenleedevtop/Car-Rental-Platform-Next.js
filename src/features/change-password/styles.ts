import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ChangePasswordMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(5)};
    button {
      border-radius: 20rem;
    }
  `}
`;

export const ChangePasswordSubtitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 20px;
    color: ${theme.palette.primary.main}
`}
`;
