import { useEffect, useRef, useState } from 'react';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import * as S from './styles';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Button } from '../../components/Button';
import { toast } from 'sonner';
import { Select, SelectOptions } from '../../components/Select';
import { Checkbox } from '../../components/Checkbox';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SubtitleService } from '../../services/http/subtitle';
import { useForm } from 'react-hook-form';
import { MdSubtitles } from 'react-icons/md';
import { FiX } from 'react-icons/fi';
import { useDebounce } from '../../hooks/useDebounce';
import { TmdbService } from '../../services/http/TmdbService';
import { MovieProps } from '../landing_page';
import { languages } from '../../constants/language';
import { handleFormatFileSize } from '../../utils/formatFileSize';

export function SubtitleUpload() {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [searchParams] = useSearchParams();
  const { register, getValues, control, setValue } = useForm();
  const debouncedSearchMovie = useDebounce(searchedMovie, 500);

  const tmdbId = searchParams.get('movieId');

  function handleFileInputClick() {
    fileInputRef.current?.click();
  }

  const { data: movie } = useQuery<MovieProps>({
    queryKey: ['movie', tmdbId],
    queryFn: async () => await TmdbService.getMovieById(tmdbId),
  });

  const selectedMovie = {
    label: movie?.title,
    value: movie?.id?.toString(),
  };

  const { data: movies, isLoading } = useQuery<MovieProps[]>({
    queryKey: ['movie', debouncedSearchMovie],
    queryFn: async () => await TmdbService.getMovieByName(searchedMovie),
    enabled: !!debouncedSearchMovie,
    staleTime: 0,
  });

  const moviesOptions: SelectOptions[] | undefined = movies?.map(
    (movie: MovieProps) => {
      return {
        label: movie.title,
        value: movie.id.toString(),
      };
    },
  );

  const { mutate } = useMutation({
    mutationFn: async (data: any) => await SubtitleService.upload(data),
    onSuccess: async () => {
      setValue('isClosedCaptions', false);
      setValue('language', languages[0]);
      setSelectedFile(null);
      toast.success('Legenda enviada com sucesso!');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao enviar legenda!');
    },
  });

  async function handleUploadSubtitle() {
    const data = getValues();
    const formData = new FormData();

    // Formatação de nome de arquivo
    const movieNameFormatted = data.movie.label.split(' ').join('.');
    const movieReleaseDate = movie?.release_date;
    const subtitleLanguage: string = data.language.value;
    const subtitleClosedCaptions = data.isClosedCaptions ? '.CC' : '';

    const fileName = `${movieNameFormatted}.${
      movieReleaseDate?.split('-')[0]
    }.${subtitleLanguage.toUpperCase()}${subtitleClosedCaptions}.srt`;

    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    formData.append('isClosedCaptions', data.isClosedCaptions);
    formData.append('language', data.language.value);
    formData.append('tmdbId', data.movie.value);
    formData.append('fileName', fileName);

    mutate(formData);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  }

  function handleRemoveFile() {
    setSelectedFile(null);
  }

  useEffect(() => {
    setValue('isClosedCaptions', false);
    setValue('language', languages[0]);
    setValue('movie', selectedMovie);
  }, []);

  return (
    <>
      <Helmet title="Upload Legenda" />
      <HeaderNavigation />
      <S.SubtitleUploadContainer>
        <h1>Adicione sua legenda</h1>
        <S.UploadForm onClick={handleFileInputClick}>
          <>
            <BiSolidCloudUpload />
            <S.Formats>Formato aceito: .srt</S.Formats>
          </>

          <S.FileInput
            type="file"
            accept=".srt"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </S.UploadForm>

        <S.FileList>
          {selectedFile && (
            <>
              <S.File>
                <S.Icon>
                  <MdSubtitles />
                </S.Icon>

                <div>
                  <p>{selectedFile.name}</p>
                  <p>{handleFormatFileSize(selectedFile.size)}</p>
                </div>

                <button type="button" onClick={handleRemoveFile}>
                  <FiX />
                </button>
              </S.File>
            </>
          )}
        </S.FileList>

        <S.Fieldset>
          <Select
            control={control}
            options={moviesOptions || []}
            label="Filme"
            isLoading={isLoading}
            onInputChange={(value) => setSearchedMovie(value)}
            placeholder="Procure por um filme..."
            name="movie"
          />
          <Select
            control={control}
            options={languages}
            label="Idiomas"
            {...register('language')}
          />
          <Checkbox
            control={control}
            label="Closed Captions"
            {...register('isClosedCaptions')}
          />
        </S.Fieldset>

        <S.SubtitleUploadActions>
          <Button variant="secondary" size="lg" fullWidth>
            Voltar
          </Button>

          <Button fullWidth size="lg" onClick={handleUploadSubtitle}>
            Enviar
          </Button>
        </S.SubtitleUploadActions>
      </S.SubtitleUploadContainer>
    </>
  );
}
