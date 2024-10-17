import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class User {
    private UUID id;
    private String name;
    private String email;
    private String password;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private boolean isSubtitler;
    private long points;
    private List<Movie> favoriteMovies;
    private List<Subtitle> subtitles;
    private List<Rating> ratings;
    private Level level;

    public User(UUID id, String name, String email, String password, boolean isSubtitler, long points,
                List<Subtitle> subtitles, List<Rating> ratings) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.isSubtitler = isSubtitler;
        this.points = points;
        this.subtitles = subtitles;
        this.ratings = ratings;
    }

    public void updatePoints(long points) {
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public boolean isSubtitler() {
        return isSubtitler;
    }

    public void setSubtitler(boolean isSubtitler) {
        this.isSubtitler = isSubtitler;
    }

    public long getPoints() {
        return points;
    }

    public List<Movie> getFavoriteMovies() {
        return favoriteMovies;
    }

    public void setFavoriteMovies(List<Movie> favoriteMovies) {
        this.favoriteMovies = favoriteMovies;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public List<Subtitle> getSubtitles() {
        return subtitles;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setSubtitles(List<Subtitle> subtitles) {
        this.subtitles = subtitles;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }
}
