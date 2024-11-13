package br.com.voltz.projetos.tres.ligadaslegendas.services;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.GetSubtitleByMovieIdDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.SubtitleUploadDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import br.com.voltz.projetos.tres.ligadaslegendas.models.User;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.SubtitleRepository;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SubtitleService {

    @Autowired
    private SubtitleRepository subtitleRepository;
    private UserRepository userRepository;
    private TokenService tokenService;

    public void saveSubtitle(SubtitleUploadDTO body) throws IOException {
        Subtitle subtitle = new Subtitle();
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        subtitle.setUser(user);

        subtitle.setFileName(body.file().getOriginalFilename());
        subtitle.setFile(body.file().getBytes());
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
