package SpotFilm.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class Filme {
    private static final String url = "https://image.tmdb.org/t/p/w500";

    @Setter
    @JsonProperty("backdrop_path")
    private String backdropPath;

    @Setter
    @Getter
    @JsonProperty("genres")
    private List<Genero> generos;

    @Setter
    @Getter
    @JsonProperty("id")
    private int id;

    @Setter
    @Getter
    @JsonProperty("overview")
    private String overview;

    @Setter
    @JsonProperty("poster_path")
    private String posterPath;

    @Setter
    @Getter
    @JsonProperty("release_date")
    private String releaseDate;

    @Setter
    @Getter
    @JsonProperty("title")
    private String title;

    @Setter
    @Getter
    @JsonProperty("vote_average")
    private double voteAverage;

    public Filme(String backdropPath, List<Genero> generos, int id, String overview, String posterPath, String releaseDate, String title, double voteAverage) {
        this.backdropPath = backdropPath;
        this.generos = generos;
        this.id = id;
        this.overview = overview;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.title = title;
        this.voteAverage = voteAverage;
    }

    public String getBackdropPath() {
        return url + backdropPath;
    }

    public String getPosterPath() {
        return url + posterPath;
    }
}
