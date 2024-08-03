package SpotFilm.model;

public class Genero {
    private int id;
    private String name;

    // Construtor padrão
    public Genero() {
    }

    // Construtor com argumentos (opcional)
    public Genero(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getters e setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    // toString() opcional para facilitar a depuração
    @Override
    public String toString() {
        return "Genero{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
