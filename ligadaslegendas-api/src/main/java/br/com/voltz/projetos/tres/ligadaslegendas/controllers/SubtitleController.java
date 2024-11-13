package br.com.voltz.projetos.tres.ligadaslegendas.controllers;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.GetSubtitleByMovieIdDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.SubtitleUploadDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import br.com.voltz.projetos.tres.ligadaslegendas.services.SubtitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/subtitle")
public class SubtitleController {

    @Autowired
    private SubtitleService subtitleService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadSubtitle(@ModelAttribute SubtitleUploadDTO body) {
        try {
            if (body.file().isEmpty() || !body.file().getOriginalFilename().endsWith(".srt")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Arquivo inválido. Envie um arquivo .srt.");
            }
            subtitleService.saveSubtitle(body);
            return ResponseEntity.ok("Arquivo salvo com sucesso.");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar o arquivo.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String id) throws IOException {
        Optional<Subtitle> subtitle = subtitleService.getSubtitleById(UUID.fromString(id));
        byte[] file = subtitle.get().getFile();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + subtitle.get().getFileName())
                .header(HttpHeaders.CONTENT_TYPE, "application/octet-stream")
                .header(HttpHeaders.CONTENT_LENGTH, String.valueOf(file.length))
                .body(file);
    }

    @GetMapping("/")
    public List<Subtitle> getSubtitlesByMovieId() {
        return subtitleService.getAllSubtitles();
    }

    @GetMapping("/movie/{id}")
    public List<GetSubtitleByMovieIdDTO> getSubtitleByTmdbId(@PathVariable String id) {
        return subtitleService.getSubtitleByTmdbId(Integer.parseInt(id));
    }
}
