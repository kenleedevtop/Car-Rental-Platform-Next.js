import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid } from 'components/system';

export const AddProjectModalMain = styled(Grid)`
  width: 100%;
`;

export const AddProjectHeadline = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #7e839f;
  font-size: 16px;
  font-weight: 600;

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const AddProjectDocumentPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  background: #f8f9fd;
  padding: 16px 12px;
`;

export const RTEContainer = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      dipslay: grid;
      grid-column: 1/3;
      gap: 1.25rem;
      ${theme.breakpoints.down(768)} {
        grid-column: unset;
      }
  
  `}
`;
