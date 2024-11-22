package br.com.voltz.projetos.tres.ligadaslegendas.helpers;

import br.com.voltz.projetos.tres.ligadaslegendas.models.Rating;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.RatingRepository;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.SubtitleRepository;
import br.com.voltz.projetos.tres.ligadaslegendas.services.RatingService;
import br.com.voltz.projetos.tres.ligadaslegendas.services.SubtitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class RatingSubtitleHelper {
    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private SubtitleRepository subtitleRepository;

    public void updateSubtitleRating(String subtitleId) {
        Subtitle subtitle = subtitleRepository.findById(UUID.fromString(subtitleId)).orElse(null);
        List<Rating> ratings = ratingRepository.findBySubtitleId(UUID.fromString(subtitleId));

        double sum = 0;
        for (Rating rating : ratings) {
            sum = sum + rating.getRating();
        }

        double newAverage = sum / ratings.size();

        subtitle.setRatingCounter(ratings.size());
        subtitle.setRating(newAverage);
        subtitleRepository.save(subtitle);
    }
}
