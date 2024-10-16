public enum Level {
    INICIANTE(1, "Iniciante", 1000),
    COLABORADOR(2, "Colaborador", 2000),
    CONFIAVEL(3, "Confiável", 4000),
    ESPECIALISTA(4, "Especialista", 8000),
    MESTRE(5, "Mestre", 16000),
    CURADOR(6, "Curador", 32000),
    SABIO(7, "Sábio", 64000),
    LIDER(8, "Líder", 128000),
    EMBAIXADOR(9, "Embaixador", 256000),
    LEGENDARIO(10, "Legendário", 512000);

    private final int id;
    private final String title;
    private final long points;

    private Level(int id, String title, long points) {
        this.id = id;
        this.title = title;
        this.points = points;
    }

    public static Level getLevel(long points) {
        for (Level level : Level.values()) {
            if (points >= level.points) {
                return level;
            }
        }
        return INICIANTE;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public long getPoints() {
        return points;
    }
}
