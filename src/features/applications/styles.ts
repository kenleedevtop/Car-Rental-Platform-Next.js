import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const ProjectsMain = styled(Stack)`
  display: grid;
`;

export const ProjectsGrid = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px 22px;

  ${theme.breakpoints.down('xl')} {
    grid-template-columns: 1fr 1fr;
  }

  ${theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
  }

  `}
`;

export const MarketPageFilter = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}20;
        padding: ${theme.spacing(5)};
    `}
`;

export const MarketPageFilterActions = styled(Stack)<{
  theme?: Theme;
}>`
  justify-content: flex-end;
  & > * {
    min-width: 100px;
  }
`;

export const MarketHeadline = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 16px;
    font-weight: 600;
    color: ${theme.palette.primary.main};
  `}
`;

export const MarketTableItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MarketTableItemImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 8px;
`;

export const MarketTableItemLabel = styled.div`
  color: #464e5f;
`;

export const HomePageChartsGrid = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing(5)};
  ${theme.breakpoints.down('xl')} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
  }
`}
`;
