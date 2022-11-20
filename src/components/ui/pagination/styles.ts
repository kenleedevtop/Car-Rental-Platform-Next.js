import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { TPaginationAlign } from 'components/ui/pagination/types';

const aligns = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export const PaginationMain = styled(Pagination)<{ align: TPaginationAlign }>`
  ${({ align }) => `
    display: flex;
    justify-content: ${aligns[align]};
  `}
`;
