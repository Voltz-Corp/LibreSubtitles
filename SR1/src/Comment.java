import java.time.LocalDateTime;
import java.util.UUID;

public class Comment {
    private User user;
    private UUID id;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private long upVotes;
    private long downVotes;

    public Comment(UUID id, String content) {
        this.id = id;
        this.content = content;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public void upVote() {

    }

    public void downVote() {
    }

    public long getVoteStats() {
        return 0;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public long getUpVotes() {
        return upVotes;
    }

    public long getDownVotes() {
        return downVotes;
    }

}
