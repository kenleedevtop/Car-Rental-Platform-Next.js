import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

export const HelpCollapseMain = styled(Card)``;

export const HelpCollapseHeaderText = styled.h2<{
  theme?: Theme;
  help?: boolean;
}>`
  ${({ help, theme }) => `
    color: ${help ? theme.palette.primary.main : '#464e5f'};
  `}
`;

export const HelpCollapseHeader = styled.div<{
  theme?: Theme;
}>`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${theme.palette.primary.main};
  `}
`;

export const HelpCollapseText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  width: 100%;
  margin: ${theme.spacing(5)} 0;
  color: #464E5F;
  `}
`;
