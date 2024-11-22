package br.com.voltz.projetos.tres.ligadaslegendas.services;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.rating.CreateRatingDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.rating.UpdateRatingDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.helpers.RatingSubtitleHelper;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Rating;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import br.com.voltz.projetos.tres.ligadaslegendas.models.User;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.OptionalDouble;
import java.util.UUID;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private SubtitleService subtitleService;

    @Autowired
    private RatingSubtitleHelper ratingSubtitleHelper;

    public void createRating(CreateRatingDTO body) {
        Rating rating = new Rating();
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Subtitle subtitle = subtitleService.getSubtitleById(UUID.fromString(body.subtitleId()));

        rating.setRating(body.rating());
        rating.setUser(user);
        rating.setSubtitle(subtitle);
        ratingRepository.save(rating);

        ratingSubtitleHelper.updateSubtitleRating(body.subtitleId());
    }

    public void updateRating(UpdateRatingDTO body) {
        Rating rating = ratingRepository.findById(UUID.fromString(body.ratingId())).orElse(null);
        rating.setRating(body.rating());

        ratingRepository.save(rating);

        ratingSubtitleHelper.updateSubtitleRating(rating.getSubtitle().getId().toString());
    }

    public Rating getRatingFromUserBySubtitleId(String subtitleId) {
        List<Rating> ratings = ratingRepository.findBySubtitleId(UUID.fromString(subtitleId));
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Rating userRating = ratings.stream()
                .filter(rating -> rating.getUser().getId().equals(user.getId())).findFirst().orElse(null);

        return userRating;
    }

    public List<Rating> getRatingBySubtitleId(String subtitleId) {
        List<Rating> ratings = ratingRepository.findBySubtitleId(UUID.fromString(subtitleId));

        return ratings;
    }

}
