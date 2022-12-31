import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const CreateSurveyPageMain = styled(Stack)``;

export const AddQuestion = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        display: flex;
        align-items: center;
        gap: ${theme.spacing(2.5)};
        padding: ${theme.spacing(5)} 0 0;
        color: ${theme.palette.primary.main};
        cursor: pointer;
        font-weight: 700;
    `}
`;

export const QuestionContainer = styled(Stack)``;
