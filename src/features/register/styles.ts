import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';
import { Input } from 'components/ui';

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

export const RegisterCompanyTopStack = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        flex-direction: column;
    }
  `}
`;
export const RegisterCompanyBottomStack = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        flex-direction: column;
    }
  `}
`;
export const RegisterCompanyFName = styled(Input)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        width: 100%;
    }
  `}
`;
export const RegisterCompanyLName = styled(Input)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        width: 100%;
    }
`}
`;
export const RegisterCompanyCompany = styled(Input)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        width: 100%;
    }
  `}
`;
export const RegisterCompanyRole = styled(Input)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        width: 100%;
    }
  `}
`;

export const RegisterInfluencerStack = styled(Stack)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        flex-direction: column;
    }
  `}
`;
export const RegisterInfluencerFName = styled(Input)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        width: 100%;
    }
  `}
`;
export const RegisterInfluencerLName = styled(Input)<{ theme?: Theme }>`
  ${({ theme }) => `
    ${theme.breakpoints.down('sm')} {
        width: 100%;
    }
`}
`;
