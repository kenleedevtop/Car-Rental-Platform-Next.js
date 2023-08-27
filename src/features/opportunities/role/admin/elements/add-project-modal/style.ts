import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const AddProjectContainer = styled(Stack)`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 10px;
`;

export const AddProjectModalMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
     width: 100%;
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 16px;
     ${theme.breakpoints.down(768)} {
      grid-template-columns: 1fr;
     }
  `}
`;

export const AddProjectSingleModalMain = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
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
