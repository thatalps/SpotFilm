package SpotFilm.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

public class Genero {
    @Getter
    @Setter
    @JsonProperty("id")
    private int id;

    @Getter
    @Setter
    @JsonProperty("name")
    private String name;
}
