package br.com.voltz.projetos.tres.ligadaslegendas.controllers;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.rating.CreateRatingDTO;
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

}
