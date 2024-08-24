package SpotFilm.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

public class Genero {
    @Getter
    @Setter
    @JsonProperty("id")
    private int id;

    @Getter
    @Setter
    @JsonProperty("name")
    private String name;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Genero genero = (Genero) o;
        return id == genero.id && Objects.equals(name, genero.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
