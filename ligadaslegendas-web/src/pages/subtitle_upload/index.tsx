import { useRef } from 'react';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import * as S from './styles';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Button } from '../../components/Button';
import { toast } from 'sonner';
import { Select } from '../../components/Select';
import { Checkbox } from '../../components/Checkbox';
import { Helmet } from 'react-helmet-async';

export function SubtitleUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleFileInputClick() {
    fileInputRef.current?.click();
  }

  function handleFileUpload() {
    toast.success('Arquivo de legenda enviado com sucesso!');
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

  return (
    <>
      <Helmet title="Upload Legenda" />
      <HeaderNavigation />
      <S.SubtitleUploadContainer>
        <h1>Adicione sua legenda</h1>
        <S.UploadForm onClick={handleFileInputClick}>
          <BiSolidCloudUpload />
          <S.Formats>Formatos aceitos: WebVTT, .srt, .txt?...</S.Formats>
          <S.FileInput ref={fileInputRef} type="file" />
        </S.UploadForm>

        <S.Fieldset>
          <Select options={languages} label="Idiomas" />
          <Checkbox label="Closed Captions" />
        </S.Fieldset>

        <S.SubtitleUploadActions>
          <Button variant="secondary" size="lg" fullWidth>
            Voltar
          </Button>

          <Button fullWidth size="lg" onClick={handleFileUpload}>
            Enviar
          </Button>
        </S.SubtitleUploadActions>
      </S.SubtitleUploadContainer>
    </>
  );
}
