package br.com.voltz.projetos.tres.ligadaslegendas.controllers;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.rating.CreateRatingDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.rating.UpdateRatingDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Rating;
import br.com.voltz.projetos.tres.ligadaslegendas.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rating")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping("/")
    public ResponseEntity<String> createRating(@RequestBody CreateRatingDTO body) {
        ratingService.createRating(body);
        return ResponseEntity.ok("Avaliação enviada com sucesso!");
    }

    @GetMapping("/subtitle/{id}")
    public ResponseEntity<Rating> getRatingBySubtitleId(@PathVariable String id) {
        Rating rating = ratingService.getRatingFromUserBySubtitleId(id);

        return ResponseEntity.ok().body(rating);
    }

    @PutMapping("/")
    public ResponseEntity<String> updateRating(@RequestBody UpdateRatingDTO body) {
        ratingService.updateRating(body);
        return ResponseEntity.ok("Avaliação atualizada com sucesso!");
    }
}
