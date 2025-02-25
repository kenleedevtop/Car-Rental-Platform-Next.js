import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

export const NotificationCard = styled(Card)<{ theme?: Theme }>`
  ${({ theme }) => `
    gap: ${theme.spacing(4)};
    display: flex;
    flex-direction: column;
`}
`;

export const NotificationTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    gap: ${theme.spacing(2)};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: ${theme.palette.primary.main};
    font-weight: 500;

    svg {
      cursor: pointer;
    }
`}
`;

export const NotificationsCardMain = styled(Card)`
  max-height: 400px;
  overflow-y: auto;
`;

export const NotificationsCardList = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
`}
`;
