import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Card } from 'components/ui';

export const QuestionMain = styled(Card)`
  width: 100%;
`;

export const QuestionHeader = styled.div<{ theme?: Theme }>`
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

export const QuestionHeaderActions = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(5)};

    input {
        width: 300px;
        background: #fff;
    }
    `}
`;

export const QuestionCounter = styled.div``;

export const QuestionActions = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;

  svg {
    width: 39px;
    height: 39px;
  }
`;

export const QuestionBody = styled.div``;

export const QuestionFooter = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    margin-top: ${theme.spacing(5)};
    border-top: 1px solid ${theme.palette.common.gray[2]}50;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme.spacing(5)} 0;

    svg {
        cursor: pointer;
    }
    `}
`;

export const QuestionFooterLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const QuestionFooterRight = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacing(5)};
    `}
`;

export const QuestionHighlight = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        color: ${theme.palette.primary.main};
        font-weight: 600;
        margin: ${theme.spacing(1)};
        cursor: pointer;
    `}
`;
