import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const RegisterTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 48px;
    font-weight: 700;
    color: ${theme.palette.primary.main}
  `}
`;
export const RegisterSubtitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 20px;
    color: ${theme.palette.primary.main}
  `}
`;

export const RegisterInfluencerMain = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
  ${theme.breakpoints.down('sm')} {
    .css-9v3k90-StackMain {
      flex-direction: column;
    }
    .css-1xqz3x8-InputMain {
      width: 100%;
    }
  }
  `}
`;
export const RegisterCompanyMain = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
  ${theme.breakpoints.down('sm')} {
    .css-9v3k90-StackMain {
      flex-direction: column;
    }
    .css-1xqz3x8-InputMain {
      width: 100%;
    }
  }
  `}
`;
