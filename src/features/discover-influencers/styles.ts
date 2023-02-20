import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const DiscoverInfluencersPageMain = styled(Stack)`
  width: 100%;
`;

export const DiscoverInfluencersPageCharts = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        gap: ${theme.spacing(5)};
        width: 100%;
    `}
`;

export const DiscoverInfluencersPageFilter = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}20;
        padding: ${theme.spacing(5)};
    `}
`;

export const DiscoverInfluencersPageFilterActions = styled(Stack)<{
  theme?: Theme;
}>`
  justify-content: flex-end;
  & > * {
    min-width: 100px;
  }
`;

export const DiscoverInfluencersAction = styled.div`
  cursor: pointer;
`;
