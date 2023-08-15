import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const SImage = styled.img<{ theme?: Theme; fullscreen: boolean }>`
  ${({ fullscreen }) => `
    cursor: pointer;
    max-width: 100%;
    height: ${fullscreen ? '70%' : '200px'};
    width: ${fullscreen ? '70%' : '100%'};
    object-fit: cover;
    `}
`;
