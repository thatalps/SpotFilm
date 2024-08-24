package SpotFilm.dto;

import SpotFilm.model.Filmes;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class FilmeRespostaApi {
    // Getters e Setters
    @Setter
    @Getter
    private int page;

    @Setter
    @Getter
    private List<Filmes> results;

    @Setter
    @Getter
    private int total_pages;

    @Setter
    @Getter
    private int total_results;
}
