package br.com.voltz.projetos.tres.ligadaslegendas.models;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="subtitles")
@Data
public class Subtitle {
    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;

    private String fileName;

    private String filePath;

    private String language;

    private boolean isClosedCaptions;

    private double rating;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @CreationTimestamp
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @Column(nullable = true, unique = true)
    private int tmdbId;
}
