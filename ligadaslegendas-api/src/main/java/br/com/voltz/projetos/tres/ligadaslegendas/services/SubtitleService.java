package br.com.voltz.projetos.tres.ligadaslegendas.services;

import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.GetSubtitleByMovieIdDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.SubtitleSynchronizeDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.dto.subtitle.SubtitleUploadDTO;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Rating;
import br.com.voltz.projetos.tres.ligadaslegendas.models.Subtitle;
import br.com.voltz.projetos.tres.ligadaslegendas.models.User;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.SubtitleRepository;
import br.com.voltz.projetos.tres.ligadaslegendas.repositories.UserRepository;
import br.com.voltz.projetos.tres.ligadaslegendas.services.auth.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@Service
public class SubtitleService {

    @Autowired
    private SubtitleRepository subtitleRepository;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public void createSubtitle(SubtitleUploadDTO body) throws IOException {
        Subtitle subtitle = new Subtitle();
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        subtitle.setUser(user);

        Path filePath = Paths.get(uploadDir, UUID.randomUUID() + "." + body.fileName());
        Files.createDirectories(Paths.get(uploadDir));

        body.file().transferTo(filePath.toAbsolutePath().toFile());

        subtitle.setFileName(body.fileName());
        subtitle.setFilePath(filePath.toString());
        subtitle.setTmdbId(body.tmdbId());
        subtitle.setLanguage(body.language());
        subtitle.setClosedCaptions(body.isClosedCaptions());

        saveSubtitle(subtitle);
    }

    public Subtitle getSubtitleById(UUID id) {
        return subtitleRepository.findById(id).orElse(null);
    }

    public List<GetSubtitleByMovieIdDTO> getSubtitleByTmdbId(int id) {
        return subtitleRepository.findByTmdbId(id);
    }

    public List<Subtitle> getAllSubtitles() {
        return subtitleRepository.findAll();
    }

    public FileSystemResource synchronizeSubtitle(SubtitleSynchronizeDTO body) throws IOException {
        String uploadTemp = uploadDir + "/temp";

        Path inputFilePath = Paths.get(uploadTemp, body.file().getOriginalFilename() + UUID.randomUUID());
        Files.createDirectories(Paths.get(uploadTemp));
        body.file().transferTo(inputFilePath.toAbsolutePath().toFile());

        String outputFileName = "adjusted_" + body.file().getOriginalFilename();
        Path outputFilePath = Paths.get(uploadTemp, outputFileName);

        BufferedReader reader = new BufferedReader(new FileReader(inputFilePath.toFile()));
        BufferedWriter writer = new BufferedWriter(new FileWriter(outputFilePath.toFile()));

        String line;
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss.SSS");
        double milliseconds = body.seconds();

        while ((line = reader.readLine()) != null) {
            if (line.contains("-->")) {
                String[] parts = line.split(" --> ");
                String newStart = adjustTime(parts[0], milliseconds, timeFormatter);
                String newEnd = adjustTime(parts[1], milliseconds, timeFormatter);
                writer.write(newStart + " --> " + newEnd);
                writer.newLine();
            } else {
                writer.write(line);
                writer.newLine();
            }
        }

        reader.close();
        writer.close();

        return new FileSystemResource(outputFilePath.toFile());
    }

    private String adjustTime(String time, double seconds, DateTimeFormatter formatter) {
        String normalizedTime = time.replace(",", ".");

        LocalTime parsedTime = LocalTime.parse(normalizedTime, formatter);

        int wholeSeconds = (int) seconds;
        int nanos = (int) ((seconds % 1) * 1_000_000_000);

        LocalTime adjustedTime = parsedTime.plusSeconds(wholeSeconds).plusNanos(nanos);

        return adjustedTime.format(formatter).replace(".", ",");
    }



    public void saveSubtitle(Subtitle subtitle) {
        subtitleRepository.save(subtitle);
    }
}
