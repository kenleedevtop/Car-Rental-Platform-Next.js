import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { GridCell } from 'components/system';
import { Card } from 'components/ui';

export const HelpPageMain = styled(Card)``;

export const ChartWrapper = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 500px;
        height: 300px;
        margin: 50px 0px;

        ${theme.breakpoints.down('md')} {
            width: 440px;
        }

        ${theme.breakpoints.down('sm')} {
            width: 350px;
        }

        ${theme.breakpoints.down('xs')} {
            width: 280px;
        }
    `}
`;

export const GridCellCustom = styled(GridCell)<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: flex-end;
    margin-bottom: 25px;



    ${theme.breakpoints.down('xs')} {
        flex-direction: column;
        align-items: center;
        gap: 25px;
        width: 280px;
    }
    `}
`;
