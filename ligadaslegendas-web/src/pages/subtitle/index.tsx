import * as S from './styles';

import { Helmet } from 'react-helmet-async';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SubtitleService } from '../../services/http/subtitle';
import { Button } from '../../components/Button';
import { Star } from '../../components/Star';
import { useState } from 'react';
import { Rating as RatingProps, Subtitle as SubtitleProps } from '../../types';
import {
  CreateRatingProps,
  RatingService,
  UpdateRatingProps,
} from '../../services/http/rating';
import { toast } from 'sonner';
import { FiDownload } from 'react-icons/fi';

export function Subtitle() {
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const queryClient = useQueryClient();

  const subtitleRatingMessage = [
    'Ruim',
    'Razoável',
    'Bom!',
    'Muito bom!',
    'Excelente!',
  ];

  const { data: subtitle } = useQuery<SubtitleProps>({
    queryKey: ['subtitle', id],
    queryFn: async () => await SubtitleService.getSubtitleById(id!),
  });

  const { data: userRating } = useQuery<RatingProps>({
    queryKey: ['rating', id],
    queryFn: async () => await RatingService.findBySubtitleId(id!),
  });

  const { mutate: createRating } = useMutation({
    mutationFn: async (data: CreateRatingProps) =>
      await RatingService.createRating(data),
    onSuccess: async () => {
      toast.success('Avaliação enviada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['subtitle', id] });
      queryClient.invalidateQueries({ queryKey: ['rating', id] });
    },
    onError: () => {
      toast.error('Ocorreu um erro ao avaliar a legenda!');
    },
  });

  const { mutate: updateRating } = useMutation({
    mutationFn: async (data: UpdateRatingProps) =>
      await RatingService.updateRating(data),
    onSuccess: async () => {
      toast.success('Nova avaliação enviada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['subtitle', id] });
      queryClient.invalidateQueries({ queryKey: ['rating', id] });
    },
    onError: () => {
      toast.error('Ocorreu um erro ao avaliar a legenda!');
    },
  });

  const subtitleRating = Math.max(0, Math.floor((subtitle?.rating || 0) - 1));

  function handleCreateRating() {
    const data = {
      rating,
      subtitleId: id!,
    };

    createRating(data);
  }

  function handleUpdateRating() {
    const data = {
      rating,
      ratingId: userRating!.id,
    };

    updateRating(data);
  }

  return (
    <>
      <Helmet title="Legenda" />
      <HeaderNavigation />
      <S.Wrapper>
        <S.MovieInfo>
          <S.Title>
            <p>{subtitle?.fileName} </p>

            <button>
              <FiDownload />
            </button>
          </S.Title>

          <S.MovieDetails>
            <p>Filme: Moana 2</p>
            <p>
              Idioma: {subtitle?.language} | CC:{' '}
              {subtitle?.isClosedCaptions ? 'Sim' : 'Não'}
            </p>
          </S.MovieDetails>
        </S.MovieInfo>

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
            <p>
              {userRating
                ? 'Você já avaliou essa legenda!'
                : 'Não esqueça de avaliar!'}
            </p>
            <S.StarList>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  filled={
                    index <
                    Math.round(
                      userRating && !rating ? userRating.rating : rating,
                    )
                  }
                  role="button"
                  size="sm"
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </S.StarList>
            <Button
              onClick={userRating ? handleUpdateRating : handleCreateRating}
            >
              Enviar
            </Button>
          </S.GridItem>

          <S.GridItem>
            <S.ProfilePicture>{subtitle?.user.name.charAt(0)}</S.ProfilePicture>
          </S.GridItem>
        </S.FooterSubtitle>
      </S.Wrapper>
    </>
  );
}
