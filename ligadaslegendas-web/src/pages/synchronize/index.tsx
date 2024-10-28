import { useRef } from 'react';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import * as S from './styles';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Button } from '../../components/Button';
import { Helmet } from 'react-helmet-async';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';

export function Synchronize() {
  const { register, setValue, getValues } = useForm();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleFileInputClick() {
    fileInputRef.current?.click();
  }

  function handleIncreaseMilliseconds() {
    setValue(
      'milliseconds',
      Math.round((getValues('milliseconds') + 0.05) * 100) / 100,
      {
        shouldValidate: true,
        shouldDirty: true,
      },
    );
  }

  function handleDecreaseMilliseconds() {
    setValue(
      'milliseconds',
      Math.round((getValues('milliseconds') - 0.05) * 100) / 100,
      {
        shouldValidate: true,
        shouldDirty: true,
      },
    );
  }

  return (
    <>
      <Helmet title="Sincronizar Legenda" />
      <HeaderNavigation />
      <S.SubtitleUploadContainer>
        <h1>Sincronização de Legenda</h1>
        <S.UploadForm onClick={handleFileInputClick}>
          <BiSolidCloudUpload />
          <S.Formats>Formatos aceitos: WebVTT, .srt, .txt?...</S.Formats>
          <S.FileInput ref={fileInputRef} type="file" />
        </S.UploadForm>

        <S.Synchronize>
          <Button type="button" onClick={handleDecreaseMilliseconds}>
            <FiMinus />
          </Button>
          <Input value={0.0} {...register('milliseconds')} />
          <Button type="button" onClick={handleIncreaseMilliseconds}>
            <FiPlus />
          </Button>
        </S.Synchronize>

        <S.SubtitleUploadActions>
          <Button variant="secondary" size="lg" fullWidth>
            Voltar
          </Button>

          <Button fullWidth size="lg">
            Enviar
          </Button>
        </S.SubtitleUploadActions>
      </S.SubtitleUploadContainer>
    </>
  );
}
