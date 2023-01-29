import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const AmbassadorsPageMain = styled(Stack)`
  width: 100%;
`;

export const AmbassadorsPageCharts = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        gap: ${theme.spacing(5)};
        width: 100%;
    `}
`;
