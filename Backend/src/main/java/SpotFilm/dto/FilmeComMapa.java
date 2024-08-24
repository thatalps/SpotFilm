package SpotFilm.dto;

import SpotFilm.model.Genero;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

public class FilmeComMapa {
    private static final String url = "https://image.tmdb.org/t/p/w500";

    @Setter
    @Getter
    private String backdropPath;

    @Setter
    @Getter
    private Map<Integer, Genero> generos;

    @Setter
    @Getter
    private int id;

    @Setter
    @Getter
    private String overview;

    @Setter
    private String posterPath;

    @Setter
    @Getter
    private String releaseDate;

    @Setter
    @Getter
    private String title;

    @Setter
    @Getter
    private double voteAverage;

    public String getBackdropPath() {
        return url + backdropPath;
    }

    public String getPosterPath() {
        return url + posterPath;
    }


}
