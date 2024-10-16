import java.util.UUID;

public class Rating {
    private User user;
    private UUID id;
    private int rating;
    private Subtitle subtitle;

    public Rating(User user, UUID id, int rating, Subtitle subtitle) {
        this.user = user;
        this.id = id;
        this.rating = rating;
        this.subtitle = subtitle;
    }

    public User getUser() {
        return user;
    }

    public UUID getId() {
        return id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Subtitle getSubtitle() {
        return subtitle;
    }
}
