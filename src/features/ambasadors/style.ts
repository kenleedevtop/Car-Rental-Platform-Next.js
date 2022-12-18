import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const AmbasadorsPageMain = styled(Stack)`
  width: 100%;
`;

export const AmbasadorsPageCharts = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        gap: ${theme.spacing(5)};
        width: 100%;
    `}
`;
