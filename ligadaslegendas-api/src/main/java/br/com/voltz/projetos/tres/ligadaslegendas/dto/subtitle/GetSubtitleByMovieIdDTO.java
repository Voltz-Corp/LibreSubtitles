package br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle;

import br.com.voltz.projetos.tres.ligadaslegendas.models.User;

import java.util.UUID;

public record GetSubtitleByMovieIdDTO(UUID id,
                                      String fileName,
                                      String language,
                                      double rating,
                                      User user,
                                      int tmdbId,
                                      boolean isClosedCaptions) {
}
