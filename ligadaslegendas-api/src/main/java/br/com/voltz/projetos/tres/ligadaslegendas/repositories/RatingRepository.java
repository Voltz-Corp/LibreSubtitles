package br.com.voltz.projetos.tres.ligadaslegendas.repositories;

import br.com.voltz.projetos.tres.ligadaslegendas.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface RatingRepository extends JpaRepository<Rating, UUID> {
    List<Rating> findBySubtitleId(UUID id);
}
