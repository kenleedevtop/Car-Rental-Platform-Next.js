import styled from '@emotion/styled';
import { Grid } from 'components/system';
import { Menu } from 'components/custom';
import { Theme } from '@mui/material';
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

export const PaymentImage = styled.img<{ theme?: Theme }>`
  ${({ theme }) => `
      width:100%;
      object-fit: cover;

      ${theme.breakpoints.down('md')} {
        width: 100%;
        height: 100%;
      }
    `}
`;

export const AddProjectDocumentPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  background: #f8f9fd;
  padding: 16px 12px;
`;

export const ISpan = styled.div`
  cursor: pointer;
`;

export const ToBeApprovedActionsMenu = styled(Menu)<{
  position: { right: number; top: number };
}>`
  ${({ position }) => `
    position: fixed;
    z-index: 200;
    width: 120px;
    right: ${position?.right}px;
    top: ${position?.top}px;
    `}
`;

export const TableTooltip = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        background: ${theme.palette.common.white};
        color: #4f4f4f;
        padding: ${theme.spacing(4)} ${theme.spacing(4)};
        font-size: 16px;
        margin: -10px;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.45);
        border-radius: 8px;
        letter-spacing: 1px;
        white-space: normal; /* Allow wrapping */
        max-width: 500px;

        span {
          text-decoration: underline;
          color: #4f4f4f;
        }
    `}
`;

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

export const ImageLinkContainer = styled.div`
  width: 50%;
`;
export const ThumbnailContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

