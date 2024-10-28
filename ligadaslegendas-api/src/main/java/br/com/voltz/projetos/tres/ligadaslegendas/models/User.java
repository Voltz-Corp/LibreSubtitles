package br.com.voltz.projetos.tres.ligadaslegendas.models;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="users")
@Data
public class User {
    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;

    private String name;

    @Column(unique = true)
    private String email;
    private String password;
    private Boolean isSubtitler = false;
    private long points;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @CreationTimestamp
    private LocalDateTime updatedAt;
}
