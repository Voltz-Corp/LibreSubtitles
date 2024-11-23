package br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle;

import org.springframework.web.multipart.MultipartFile;

public record SubtitleSynchronizeDTO(MultipartFile file, double seconds) {
}
