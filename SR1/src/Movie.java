import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class Movie {
   private UUID id;
   private String tmdbId;
   private LocalDateTime createdAt;
   private LocalDateTime updatedAt;
   private String title;
   private String language;
   private LocalDateTime releaseDate;
   private List<String> genres;
   private String synopsis;
   private double rating;
   private List<Subtitle> subtitles;


    public Movie(UUID id, String tmdbId, String title, String language, LocalDateTime releaseDate, List<String> genres, String synopsis, double rating) {
        this.id = id;
        this.tmdbId = tmdbId;
        this.title = title;
        this.language = language;
        this.releaseDate = releaseDate;
        this.genres = genres;
        this.synopsis = synopsis;
        this.rating = rating;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public UUID getId() {
        return id;
    }

    public String getTmdbId() {
        return tmdbId;
    }

    public void setTmdbId(String tmdbId) {
        this.tmdbId = tmdbId;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public LocalDateTime getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDateTime releaseDate) {
        this.releaseDate = releaseDate;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public List<Subtitle> getSubtitles() {
        return subtitles;
    }

    public void setSubtitles(List<Subtitle> subtitles) {
        this.subtitles = subtitles;
    }
}
