import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { TNotificationVariantType } from 'components/custom/notifications-card/types';

export const NotificationMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        padding: ${theme.spacing(2.5)};
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}10;  
        background-color: ${theme.palette.common.white};
    `}
`;

export const NotificationContent = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: block;
    margin-bottom: ${theme.spacing(2.5)};
`}
`;

export const NotificationStatus = styled.div<{
  theme?: Theme;
  variant: TNotificationVariantType;
}>`
  ${({ theme, variant }) => `
    width: 8px;
    height: 8px;
    border-radius: 50%;
    float: left;
    margin: 7.5px 5px 0 0;
    background-color: ${
      (variant === 'error' && theme.palette.error.main) ||
      (variant === 'success' && theme.palette.success.main) ||
      (variant === 'info' && theme.palette.info.main) ||
      (variant === 'primary' && theme.palette.primary.main) ||
      (variant === 'secondary' && theme.palette.secondary.main) ||
      (variant === 'warning' && theme.palette.warning.main)
    };
`}
`;

export const NotificationText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
font-size: 14px;
color: ${theme.palette.common.black};
`}
`;

export const NotificationDate = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
font-size: 12px;
color: ${theme.palette.common.gray[6]};
`}
`;
