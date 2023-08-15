import styled from '@emotion/styled';
import { Theme } from '@mui/material';
// import { Menu } from 'components/custom';
import { Stack } from 'components/system';

export const ProjectsMain = styled(Stack)`
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

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
`;

export const PortfolioFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PortfolioActions = styled(Stack)`
  width: fit-content;
`;

export const PortfolioFlexHeadline = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #7e839f;
`;

export const ChartWrapper = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 800px;
        height: 400px;
        margin: 30px 0px 15px;

        ${theme.breakpoints.down('xl')} {
            width: 400px;
            max-width: 400px;
        }

        ${theme.breakpoints.down('lg')} {
          width: 380px;
      }

        ${theme.breakpoints.down('md')} {
            width: 380px;
        }

        ${theme.breakpoints.down('sm')} {
            max-width: 400px;
            width: 80vw;
        }

        // ${theme.breakpoints.down('xs')} {
        //     width: 280px;
        // }
    `}
`;
