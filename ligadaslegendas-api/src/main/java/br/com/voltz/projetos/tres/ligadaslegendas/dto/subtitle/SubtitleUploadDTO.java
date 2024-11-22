package br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle;

import org.springframework.web.multipart.MultipartFile;

public record SubtitleUploadDTO(MultipartFile file,
                                int tmdbId,
                                String language,
                                boolean isClosedCaptions,
                                String fileName
) {
}
