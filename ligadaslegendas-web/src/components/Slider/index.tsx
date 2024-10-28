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
      perView: 8,
      spacing: 12,
    },
    breakpoints: {
      '(max-width: 970px)': {
        slides: { perView: 1 },
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
