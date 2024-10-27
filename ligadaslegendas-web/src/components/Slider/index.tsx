import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import * as S from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type SliderProps = {
  children: React.ReactNode;
};

export function Slider({ children }: SliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: 'center',
      perView: 6,
      spacing: 12,
    },
    breakpoints: {
      '(max-width: 970px)': {
        slides: { perView: 1 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
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

            {/* <div className="dots">
              {[
                ...Array(
                  sliderInstanceRef.current.track.details.slides.length,
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      sliderInstanceRef.current?.moveToIdx(idx);
                    }}
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  ></button>
                );
              })}
            </div> */}

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
