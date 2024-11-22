import * as S from './styles';

import { Helmet } from 'react-helmet-async';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { SubtitleService } from '../../services/http/subtitle';
import { Button } from '../../components/Button';
import { Star } from '../../components/Star';
import { useState } from 'react';
import { Subtitle as SubtitleProps } from '../../types';

export function Subtitle() {
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  const { data: subtitle } = useQuery<SubtitleProps>({
    queryKey: ['subtitle', id],
    queryFn: async () => await SubtitleService.getSubtitleById(id!),
  });

  const subtitleRatingMessage = [
    'Ruim',
    'Razoável',
    'Bom!',
    'Muito bom!',
    'Excelente!',
  ];

  const subtitleRating = Math.max(0, Math.floor((subtitle?.rating || 0) - 1));

  return (
    <>
      <Helmet title="Legenda" />
      <HeaderNavigation />
      <S.Wrapper>
        <S.FooterSubtitle>
          <S.GridItem>
            <strong>
              <span>{subtitle?.rating}</span>{' '}
              {subtitleRatingMessage[subtitleRating]}
            </strong>
            <S.StarList>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  filled={index < Math.floor(subtitle?.rating || 0)}
                />
              ))}
            </S.StarList>
            <p>{subtitle?.ratingCounter} avaliações</p>
          </S.GridItem>

          <S.GridItem>
            <p>Não esqueça de avaliar!</p>
            <S.StarList>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  filled={index < Math.round(rating)}
                  role="button"
                  size="sm"
                  onClick={() => setRating(index + 1)}
                />
              ))}

              <Button>Enviar</Button>
            </S.StarList>
          </S.GridItem>

          <S.GridItem>
            <p>Não esqueça de avaliar</p>
            <S.StarList>
              {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < Math.round(0)} size="sm" />
              ))}

              <Button>Enviar</Button>
            </S.StarList>
          </S.GridItem>
        </S.FooterSubtitle>
      </S.Wrapper>
    </>
  );
}
