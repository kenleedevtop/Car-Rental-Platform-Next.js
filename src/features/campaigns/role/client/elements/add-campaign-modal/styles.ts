import styled from '@emotion/styled';
import { Grid } from 'components/system';

export const AddCampaignsModalMain = styled(Grid)`
  width: 100%;
  padding-bottom: 20px;
`;

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageUploadMainContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
`;

export const ImageUploadButton = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: underline;
  cursor: pointer;
  text-align: left;
`;

export const ImageActions = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  align-items: center;
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 8px;
`;

export const ImageDeleteButton = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  text-align: left;
`;
