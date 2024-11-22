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

  const languages = [
    { label: 'Selecionar', value: '' },
    { label: 'Portuguese (BR)', value: 'pob' },
    { label: 'Português (Portugal)', value: 'por' },
    { label: 'Abkhazian', value: 'abk' },
    { label: 'Afrikaans', value: 'afr' },
    { label: 'Albanian', value: 'alb' },
    { label: 'Amharic', value: 'amh' },
    { label: 'Arabic', value: 'ara' },
    { label: 'Aragonese', value: 'arg' },
    { label: 'Armenian', value: 'arm' },
    { label: 'Assamese', value: 'asm' },
    { label: 'Asturian', value: 'ast' },
    { label: 'Azerbaijani', value: 'aze' },
    { label: 'Basque', value: 'baq' },
    { label: 'Belarusian', value: 'bel' },
    { label: 'Bengali', value: 'ben' },
    { label: 'Bosnian', value: 'bos' },
    { label: 'Breton', value: 'bre' },
    { label: 'Bulgarian', value: 'bul' },
    { label: 'Burmese', value: 'bur' },
    { label: 'Catalan', value: 'cat' },
    { label: 'Chinese (Cantonese)', value: 'zhc' },
    { label: 'Chinese (simplified)', value: 'chi' },
    { label: 'Chinese (traditional)', value: 'zht' },
    { label: 'Chinese bilingual', value: 'zhe' },
    { label: 'Croatian', value: 'hrv' },
    { label: 'Czech', value: 'cze' },
    { label: 'Danish', value: 'dan' },
    { label: 'Dari', value: 'prs' },
    { label: 'Dutch', value: 'dut' },
    { label: 'English', value: 'eng' },
    { label: 'Esperanto', value: 'epo' },
    { label: 'Estonian', value: 'est' },
    { label: 'Extremaduran', value: 'ext' },
    { label: 'Finnish', value: 'fin' },
    { label: 'French', value: 'fre' },
    { label: 'Gaelic', value: 'gla' },
    { label: 'Galician', value: 'glg' },
    { label: 'Georgian', value: 'geo' },
    { label: 'German', value: 'ger' },
    { label: 'Greek', value: 'ell' },
    { label: 'Hebrew', value: 'heb' },
    { label: 'Hindi', value: 'hin' },
    { label: 'Hungarian', value: 'hun' },
    { label: 'Icelandic', value: 'ice' },
    { label: 'Igbo', value: 'ibo' },
    { label: 'Indonesian', value: 'ind' },
    { label: 'Interlingua', value: 'ina' },
    { label: 'Irish', value: 'gle' },
    { label: 'Italian', value: 'ita' },
    { label: 'Japanese', value: 'jpn' },
    { label: 'Kannada', value: 'kan' },
    { label: 'Kazakh', value: 'kaz' },
    { label: 'Khmer', value: 'khm' },
    { label: 'Korean', value: 'kor' },
    { label: 'Kurdish', value: 'kur' },
    { label: 'Kyrgyz', value: 'kir' },
    { label: 'Latvian', value: 'lav' },
    { label: 'Lithuanian', value: 'lit' },
    { label: 'Luxembourgish', value: 'ltz' },
    { label: 'Macedonian', value: 'mac' },
    { label: 'Malay', value: 'may' },
    { label: 'Malayalam', value: 'mal' },
    { label: 'Manipuri', value: 'mni' },
    { label: 'Marathi', value: 'mar' },
    { label: 'Mongolian', value: 'mon' },
    { label: 'Montenegrin', value: 'mne' },
    { label: 'Navajo', value: 'nav' },
    { label: 'Nepali', value: 'nep' },
    { label: 'Northern Sami', value: 'sme' },
    { label: 'Norwegian', value: 'nor' },
    { label: 'Occitan', value: 'oci' },
    { label: 'Odia', value: 'ori' },
    { label: 'Persian', value: 'per' },
    { label: 'Polish', value: 'pol' },
    { label: 'Portuguese (MZ)', value: 'pom' },
    { label: 'Pushto', value: 'pus' },
    { label: 'Romanian', value: 'rum' },
    { label: 'Russian', value: 'rus' },
    { label: 'Santali', value: 'sat' },
    { label: 'Serbian', value: 'scc' },
    { label: 'Sindhi', value: 'snd' },
    { label: 'Sinhalese', value: 'sin' },
    { label: 'Slovak', value: 'slo' },
    { label: 'Slovenian', value: 'slv' },
    { label: 'Somali', value: 'som' },
    { label: 'Sorbian languages', value: 'wen' },
    { label: 'South Azerbaijani', value: 'azb' },
    { label: 'Spanish', value: 'spa' },
    { label: 'Spanish (EU)', value: 'spn' },
    { label: 'Spanish (LA)', value: 'spl' },
    { label: 'Swahili', value: 'swa' },
    { label: 'Swedish', value: 'swe' },
    { label: 'Syriac', value: 'syr' },
    { label: 'Tagalog', value: 'tgl' },
    { label: 'Tamil', value: 'tam' },
    { label: 'Tatar', value: 'tat' },
    { label: 'Telugu', value: 'tel' },
    { label: 'Tetum', value: 'tet' },
    { label: 'Thai', value: 'tha' },
    { label: 'Toki Pona', value: 'tok' },
    { label: 'Turkish', value: 'tur' },
    { label: 'Turkmen', value: 'tuk' },
    { label: 'Ukrainian', value: 'ukr' },
    { label: 'Urdu', value: 'urd' },
    { label: 'Uzbek', value: 'uzb' },
    { label: 'Vietnamese', value: 'vie' },
    { label: 'Welsh', value: 'wel' },
  ];

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
    if (selectedFile) formData.append('file', selectedFile);
    formData.append('isClosedCaptions', data.isClosedCaptions);
    formData.append('language', data.language.label);
    formData.append('tmdbId', data.movie.value);

    mutate(formData);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  }

  function handleFormatFileSize(bytes: number) {
    if (bytes === 0) return '0 Bytes';

    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const unitIndex = Math.floor(Math.log10(bytes) / 3);

    const size = (bytes / Math.pow(1000, unitIndex)).toFixed(2);
    return `${size} ${units[unitIndex]}`;
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
