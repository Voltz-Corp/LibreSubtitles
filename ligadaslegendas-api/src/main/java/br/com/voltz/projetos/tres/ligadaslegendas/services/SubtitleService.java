package br.com.voltz.projetos.tres.ligadaslegendas.services;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.GetSubtitleByMovieIdDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.SubtitleUploadDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import br.com.voltz.projetos.tres.ligadaslegendas.models.User;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.SubtitleRepository;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SubtitleService {

    @Autowired
    private SubtitleRepository subtitleRepository;
    private UserRepository userRepository;
    private TokenService tokenService;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public void saveSubtitle(SubtitleUploadDTO body) throws IOException {
        Subtitle subtitle = new Subtitle();
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        subtitle.setUser(user);

        Path filePath = Paths.get(uploadDir, body.file().getOriginalFilename());
        Files.createDirectories(Paths.get(uploadDir));

        body.file().transferTo(filePath.toAbsolutePath().toFile());

        subtitle.setFileName(body.file().getOriginalFilename());
        subtitle.setFilePath(filePath.toString());
        subtitle.setTmdbId(body.tmdbId());
        subtitle.setLanguage(body.language());
        subtitle.setClosedCaptions(body.isClosedCaptions());

        subtitleRepository.save(subtitle);
    }

    public Optional<Subtitle> getSubtitleById(UUID id) {
        return subtitleRepository.findById(id);
    }

    public List<GetSubtitleByMovieIdDTO> getSubtitleByTmdbId(int id) {
        return subtitleRepository.findByTmdbId(id);
    }


    public List<Subtitle> getAllSubtitles() {
        return subtitleRepository.findAll();
    }
}
