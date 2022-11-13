import styled from '@emotion/styled';
import { CardWithText } from 'components/custom';
import { Theme } from '@mui/material';

export const NotificationsCardMain = styled(CardWithText)``;

export const NotificationsCardList = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
`}
`;
