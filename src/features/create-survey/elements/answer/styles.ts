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

        input {
            width: 250px;
        }
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

export const AnswerArea = styled.div`
  width: 500px;
`;

export const AnswerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
