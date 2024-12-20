import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class Suggestion {
    private User user;
    private UUID id;
    private String content;
    private Subtitle subtitle;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<Label> labels;

    public Suggestion(User user, UUID id, String content, List<Label> labels, Subtitle subtitle) {
        this.user = user;
        this.id = id;
        this.content = content;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.labels = labels;
        this.subtitle = subtitle;
    }

    public User getUser() {
        return user;
    }

    public UUID getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public List<Label> getLabels() {
        return labels;
    }

    public void setLabels(List<Label> labels) {
        this.labels = labels;
    }

    public Subtitle getSubtitle() {
        return subtitle;
    }
}
