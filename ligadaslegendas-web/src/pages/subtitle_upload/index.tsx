import { useEffect, useRef } from 'react';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import * as S from './styles';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Button } from '../../components/Button';
import { toast } from 'sonner';
import { Select } from '../../components/Select';
import { Checkbox } from '../../components/Checkbox';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { SubtitleService } from '../../services/http/subtitle';
import { useForm } from 'react-hook-form';
import { MdSubtitles } from 'react-icons/md';
import { FiX } from 'react-icons/fi';

export function SubtitleUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [searchParams] = useSearchParams();
  const { register, getValues, control, watch, setValue } = useForm();

  const tmdbId = searchParams.get('movieId');
  const file = watch('file');

  function handleFileInputClick() {
    fileInputRef.current?.click();
  }

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Português', value: 'pt' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Italiano', value: 'it' },
    { label: 'Русский', value: 'ru' },
    { label: '中文 (Chinese)', value: 'zh' },
    { label: '日本語 (Japanese)', value: 'ja' },
    { label: '한국어 (Korean)', value: 'ko' },
    { label: 'हिन्दी (Hindi)', value: 'hi' },
    { label: 'العربية (Arabic)', value: 'ar' },
  ];

  const { mutate } = useMutation({
    mutationFn: async (data: any) => await SubtitleService.upload(data),
    onSuccess: async () => {
      setValue('isClosedCaptions', false);
      setValue('language', languages[0]);
      setValue('file', null);
      toast.success('Legenda enviada com sucesso!');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao enviar legenda!');
    },
  });

  async function handleUploadSubtitle() {
    const data = getValues();
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('isClosedCaptions', data.isClosedCaptions);
    formData.append('language', data.language.label);
    formData.append('tmdbId', tmdbId!);

    mutate(formData);
  }

  function handleFormatFileSize(bytes: number) {
    if (bytes === 0) return '0 Bytes';

    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const unitIndex = Math.floor(Math.log10(bytes) / 3);

    const size = (bytes / Math.pow(1000, unitIndex)).toFixed(2);
    return `${size} ${units[unitIndex]}`;
  }

  function handleRemoveFile() {
    setValue('file', null);
  }

  useEffect(() => {
    setValue('isClosedCaptions', false);
    setValue('language', languages[0]);
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
            {...register('file')}
            ref={(e) => {
              register('file').ref(e);
              fileInputRef.current = e;
            }}
          />
        </S.UploadForm>

        <S.FileList>
          {file && (
            <>
              <S.File>
                <S.Icon>
                  <MdSubtitles />
                </S.Icon>

                <div>
                  <p>{file[0].name}</p>
                  <p>{handleFormatFileSize(file[0].size)}</p>
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
