import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import * as S from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type SliderProps = {
  children: React.ReactNode;
};

export function Slider({ children }: SliderProps) {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: 'center',
      perView: 10,
      spacing: 12,
    },
    breakpoints: {
      '(max-width: 1780px)': {
        slides: { origin: 'center', perView: 8, spacing: 12 },
      },
      '(max-width: 1230px)': {
        slides: { origin: 'center', perView: 6, spacing: 12 },
      },
      '(max-width: 880px)': {
        slides: { origin: 'center', perView: 4, spacing: 12 },
      },
      '(max-width: 480px)': {
        slides: { origin: 'center', perView: 2, spacing: 12 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <S.Wrapper>
        <S.Slider ref={sliderRef} className="keen-slider">
          {children}
        </S.Slider>
        {loaded && sliderInstanceRef.current && (
          <S.SlideNavigation>
            <S.ArrowLeft
              onClick={(e: any) =>
                e.stopPropagation() || sliderInstanceRef.current?.prev()
              }
            >
              <FiChevronLeft />
            </S.ArrowLeft>

            <S.ArrowRight
              onClick={(e: any) =>
                e.stopPropagation() || sliderInstanceRef.current?.next()
              }
            >
              <FiChevronRight />
            </S.ArrowRight>
          </S.SlideNavigation>
        )}
      </S.Wrapper>
    </>
  );
}
