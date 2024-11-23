import { useRef, useState } from 'react';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import * as S from './styles';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Button } from '../../components/Button';
import { Helmet } from 'react-helmet-async';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { SubtitleService } from '../../services/http/subtitle';
import { toast } from 'sonner';
import { MdSubtitles } from 'react-icons/md';
import { handleFormatFileSize } from '../../utils/formatFileSize';

export function Synchronize() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { register, setValue, getValues } = useForm();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { mutate } = useMutation({
    mutationFn: async (data: any) => await SubtitleService.synchronize(data),
    onSuccess: async (response: any) => {
      const { data: file } = response;

      const subtitleBlob = new Blob([file]);
      const subtitleUrl = URL.createObjectURL(subtitleBlob);

      const link = document.createElement('a');

      link.href = subtitleUrl;
      link.setAttribute('download', `adjusted_${selectedFile?.name}`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      setValue('seconds', 0);
      setSelectedFile(null);
    },
    onError: () => {
      toast.error('Ocorreu um erro ao sincronizar legenda!');
    },
  });

  function handleDragOver(event: React.DragEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(event: React.DragEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];
    if (!droppedFile) return;

    if (droppedFile.type !== 'application/x-subrip') {
      toast.error('Apenas arquivos .srt são permitidos.');
      return;
    }

    setSelectedFile(droppedFile);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  }

  function handleRemoveFile() {
    setSelectedFile(null);
  }

  function handleFileInputClick() {
    fileInputRef.current?.click();
  }

  function handleSynchronizeSubtitle() {
    const data = getValues();
    const formData = new FormData();

    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    formData.append('seconds', data.seconds);

    mutate(formData);
  }

  function handleIncreaseSeconds() {
    setValue('seconds', Math.round((getValues('seconds') + 0.05) * 100) / 100, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  function handleDecreaseSeconds() {
    setValue('seconds', Math.round((getValues('seconds') - 0.05) * 100) / 100, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  return (
    <>
      <Helmet title="Sincronizar Legenda" />
      <HeaderNavigation />
      <S.SubtitleUploadContainer>
        <h1>Sincronização de Legenda</h1>
        <S.UploadForm
          onClick={handleFileInputClick}
          onDrop={(event) => handleDrop(event)}
          onDragOver={(event) => handleDragOver(event)}
          onDragLeave={handleDragLeave}
          isDragging={isDragging}
        >
          <BiSolidCloudUpload />
          <S.Formats>Formatos aceitos: .srt</S.Formats>
          <S.FileInput
            onChange={handleFileChange}
            ref={fileInputRef}
            type="file"
            accept=".srt"
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

        <S.Synchronize>
          <Button type="button" onClick={handleDecreaseSeconds}>
            <FiMinus />
          </Button>
          <Input value={0.0} {...register('seconds')} />
          <Button type="button" onClick={handleIncreaseSeconds}>
            <FiPlus />
          </Button>
        </S.Synchronize>

        <S.SubtitleUploadActions>
          <Button variant="secondary" size="lg" fullWidth>
            Voltar
          </Button>

          <Button fullWidth size="lg" onClick={handleSynchronizeSubtitle}>
            Enviar
          </Button>
        </S.SubtitleUploadActions>
      </S.SubtitleUploadContainer>
    </>
  );
}
