import styled from '@emotion/styled';
import { Step } from '@mui/material';

export const StepMain = styled(Step)`
& svg {
    cursor: pointer;
    color: #C3DBEE;
    & :last-child > {
        color: white
    }
}
`;
