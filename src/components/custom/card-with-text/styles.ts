import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

export const CardMain = styled(Card)<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing(5)};
    `}
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardText = styled.div``;

export const CardTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      font-size: 16px;
      color: ${theme.palette.primary.main};
      font-weight: 500;
  `}
`;

export const CardDescription = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 13px;
    color: ${theme.palette.common.gray[4]};
    font-weight: 300;
`}
`;

export const CardActions = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(4)};
`}
`;

export const CardBody = styled.div`
  width: 100%;
`;
