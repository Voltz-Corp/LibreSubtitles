import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class Subtitle {
    private UUID id;
    private String filename;
    private MultipartFile file; // Assuming file upload as a multipart file
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String language;
    private boolean isClosedCaptions;
    private List<Rating> ratings;
    private Movie movie;

    public Subtitle(UUID id, String filename, MultipartFile file, String language, boolean isClosedCaptions) {
        this.id = id;
        this.filename = filename;
        this.file = file;
        this.language = language;
        this.isClosedCaptions = isClosedCaptions;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public static boolean synchronize(double milisseconds, MultipartFile file,){
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
}

