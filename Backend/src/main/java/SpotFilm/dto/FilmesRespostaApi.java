package SpotFilm.dto;

import SpotFilm.model.Filme;
import SpotFilm.model.Filmes;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class FilmesRespostaApi {
    // Getters e Setters
    @Setter
    @Getter
    private int page;

    @Setter
    @Getter
    private List<Filmes> results;

    @Setter
    @Getter
    @JsonProperty("total_pages")
    private int totalPages;

    @Setter
    @Getter
    @JsonProperty("total_results")
    private int totalResults;
}
