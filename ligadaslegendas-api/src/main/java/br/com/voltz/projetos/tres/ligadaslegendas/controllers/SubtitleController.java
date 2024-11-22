package br.com.voltz.projetos.tres.ligadaslegendas.controllers;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.GetSubtitleByMovieIdDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.SubtitleUploadDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import br.com.voltz.projetos.tres.ligadaslegendas.services.SubtitleService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
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
            subtitleService.createSubtitle(body);
            return ResponseEntity.ok("Arquivo salvo com sucesso.");
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar o arquivo.");
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<FileSystemResource> downloadFile(@PathVariable String id) throws IOException {
        Subtitle subtitle = subtitleService.getSubtitleById(UUID.fromString(id));

        if (subtitle == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Path filePath = Paths.get(subtitle.getFilePath());
        FileSystemResource fileResource = new FileSystemResource(filePath.toFile());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + subtitle.getFileName())
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_OCTET_STREAM_VALUE)
                .body(fileResource);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subtitle> getSubtitleById(@PathVariable String id) throws IOException {
        Subtitle subtitle = subtitleService.getSubtitleById(UUID.fromString(id));

        if (subtitle == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok().body(subtitle);
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
