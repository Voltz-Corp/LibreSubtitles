package br.com.voltz.projetos.tres.ligadaslegendas.models;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="ratings")
@Data
public class Rating {
    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;

    private int rating;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @CreationTimestamp
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name="subtitle_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Subtitle subtitle;

    @ManyToOne
    @JoinColumn(name="user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;
}
