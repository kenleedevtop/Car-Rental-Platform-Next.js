import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const ResponseMain = styled(Stack)`
  width: 100%;
`;

export const ResponseHeader = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F1F4FF;
    padding: ${theme.spacing(2.5)} ${theme.spacing(5)};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    `}
`;

export const ResponseBody = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    padding: ${theme.spacing(5)} 0;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `}
`;

export const ResponseOptions = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items:center;
    justify-content: flex-start;
  `}
`;

export const ResponseQuestion = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
  
  `}
`;

export const ResponseAnswer = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    
    `}
`;

export const ResponseAnswers = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  
  `}
`;
