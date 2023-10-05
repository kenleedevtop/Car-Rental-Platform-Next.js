import styled from '@emotion/styled';
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

export const ImageLinkContainer = styled.div`
  width: 50%;
`;
export const ThumbnailContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;