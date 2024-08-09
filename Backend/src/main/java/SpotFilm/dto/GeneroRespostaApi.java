package SpotFilm.dto;

import SpotFilm.model.Genero;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class GeneroRespostaApi {
    @Getter
    @Setter
    private List<Genero> genres;
}
