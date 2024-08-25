package SpotFilm.dto;

import SpotFilm.model.Filme;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class ListaRespostaApi {
    @Getter
    @Setter
    int id;

    @Getter
    @Setter
    String title;

    @Getter
    @Setter
    List<Filme> movies;
}
