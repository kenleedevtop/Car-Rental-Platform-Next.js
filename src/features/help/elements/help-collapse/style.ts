import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

export const HelpCollapseMain = styled(Card)``;

export const HelpCollapseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const HelpCollapseText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  width: 100%;
  margin: ${theme.spacing(5)} 0;
  `}
`;
