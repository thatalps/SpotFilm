package SpotFilm.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class Filmes {
    private static final String url = "https://image.tmdb.org/t/p/w500";

    @Setter
    @Getter
    @JsonProperty("backdrop_path")
    private String backdropPath;

    @Setter
    @Getter
    @JsonProperty("genre_ids")
    private List<Genero> genero_ids;

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


    public String getBackdropPath() {
        return url + backdropPath;
    }

    public String getPosterPath() {
        return url + posterPath;
    }
}
