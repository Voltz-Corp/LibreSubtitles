package br.com.voltz.projetos.tres.ligadaslegendas.repositories;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.GetSubtitleByMovieIdDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface SubtitleRepository extends JpaRepository<Subtitle, UUID> {
    @Transactional
    List<GetSubtitleByMovieIdDTO> findByTmdbId(int movieId);
}
