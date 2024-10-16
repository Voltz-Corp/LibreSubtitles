import java.util.UUID;

public class Rating {
    private User user;
    private UUID id;
    private int rating;

    public Rating(UUID id, int rating) {
        this.id = id;
        this.rating = rating;
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
