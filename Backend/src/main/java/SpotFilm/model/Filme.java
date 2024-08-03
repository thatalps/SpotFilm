package SpotFilm.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


public class Filme {

    // Getters e Setters
    @Setter
    private long id;

    @Setter
    @JsonProperty("title")
    private String titulo;

    @Setter
    @JsonProperty("original_title")
    private String tituloOriginal;

    @Setter
    @JsonProperty("overview")
    private String sinopse;

    @Setter
    @JsonProperty("vote_average")
    private Double classificacao;

    @Setter
    @JsonProperty("genres")
    private List<Genero> generos;

    // Construtores, getters e setters

    public Filme() {}

    public Filme(String titulo, String tituloOriginal, String sinopse, Double classificacao, List<Genero> generos) {
        this.titulo = titulo;
        this.tituloOriginal = tituloOriginal;
        this.sinopse = sinopse;
        this.classificacao = classificacao;
        this.generos = generos;
    }

}
