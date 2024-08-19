package SpotFilm.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class Filme {
    private static final String url = "https://image.tmdb.org/t/p/w500";

    @Setter
    @Getter
    @JsonProperty("adult")
    private boolean adult;

    @Setter
    @Getter
    @JsonProperty("backdrop_path")
    private String backdropPath;

    @Setter
    @Getter
    @JsonProperty("genre_ids")
    private List<Integer> genreIds;

    @Setter
    @Getter
    @JsonProperty("id")
    private int id;

    @Setter
    @Getter
    @JsonProperty("original_language")
    private String originalLanguage;

    @Setter
    @Getter
    @JsonProperty("original_title")
    private String originalTitle;

    @Setter
    @Getter
    @JsonProperty("overview")
    private String overview;

    @Setter
    @Getter
    @JsonProperty("popularity")
    private double popularity;

    @Setter
    @Getter
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
    @JsonProperty("video")
    private boolean video;

    @Setter
    @Getter
    @JsonProperty("vote_average")
    private double voteAverage;

    @Setter
    @Getter
    @JsonProperty("vote_count")
    private int voteCount;

    public String getBackdropPath() {
        return url + backdropPath;
    }

    public String getPosterPath() {
        return url + posterPath;
    }
}
