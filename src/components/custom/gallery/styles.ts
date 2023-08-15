import { Button, Card } from 'components/ui';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const SGallery = styled(Card)<{ theme?: Theme }>`
  height: 100%;
  max-width: 100%;
  max-height: 800px;
  padding: 20px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 16px;

  .splide__slide {
    display: grid;
    place-items: center;
    max-height: 100%;

    img {
      // width: 100%;
      border-radius: 8px;
    }
  }
`;

export const SFullScreenGallery = styled.div<{ theme?: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 999;

  .splide__slide {
    display: grid;
    place-items: center;
  }
`;

export const SExit = styled(Button)<{ theme?: Theme }>`
  ${({ theme }) => `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    height: 40px;
    min-width: 40px !important;
    background: ${theme.palette.primary.main};
    padding: 0 !important;

    &:hover {
      background: ${theme.palette.secondary.main};
    }
  
    svg {
      color: #000;
      width: 20px;
      height: 20px;
    }
    
    `}
`;

export const SGalleryMainPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 8px;
`;

export const SplideMain = styled(Splide)``;

export const SplideItem = styled(SplideSlide)``;
