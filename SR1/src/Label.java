public enum Label {
    TRADUCAO_INCORRETA(1, "Tradução Incorreta"),
    LEGENDA_DESSINCRONIZADA(2, "Legenda Dessincronizada"),
    OUTRO(3, "Outro");

    private int id;
    private String title;

    private Label(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
