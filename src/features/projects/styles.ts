import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ProjectsMain = styled.div`
  display: grid;
`;

export const ProjectsGrid = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px 22px;
  margin-top: 20px;

  ${theme.breakpoints.down('xl')} {
    grid-template-columns: 1fr 1fr;
  }

  ${theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
  }

  `}
`;
