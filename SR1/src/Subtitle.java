import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class Subtitle {
    private UUID id;
    private String filename;
    private User user;
    private MultipartFile file;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String language;
    private boolean isClosedCaptions;
    private List<Rating> ratings;
    private List<Suggestion> suggestions;
    private List<Comment> comments;
    private Movie movie;
    private double rating;

    public Subtitle(UUID id, String filename, MultipartFile file, String language, boolean isClosedCaptions,
                    User user, Movie movie) {
        this.id = id;
        this.filename = filename;
        this.file = file;
        this.language = language;
        this.isClosedCaptions = isClosedCaptions;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.rating = 0;
        this.user = user;
        this.movie = movie;
    }

    public static boolean synchronize(double milisseconds, MultipartFile file){
        return false;
    }

    public double updateRating(){
        return 0;
    }

    public UUID getId() {
        return id;
    }


    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
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

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public boolean isClosedCaptions() {
        return isClosedCaptions;
    }

    public void setClosedCaptions(boolean closedCaptions) {
        isClosedCaptions = closedCaptions;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public User getUser() {
        return user;
    }

    public List<Suggestion> getSuggestions() {
        return suggestions;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public double getRating() {
        return rating;
    }

    public void setSuggestions(List<Suggestion> suggestions) {
        this.suggestions = suggestions;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}

