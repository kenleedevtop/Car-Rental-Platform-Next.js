import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const AnswerMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        margin: ${theme.spacing(5)} 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${theme.spacing(5)};

    `}
`;

export const AnswerHeader = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(10)};
    `}
`;

export const AnswerArea = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 500px;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2.5)};  
  `}
`;

export const AnswerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AddAnswerArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AreaHighlight = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    font-weight: 600;
    margin: ${theme.spacing(1)};
    cursor: pointer;
  `}
`;
