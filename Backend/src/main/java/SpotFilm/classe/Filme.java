package SpotFilm.classe;

import java.util.List;

public class Filme
{
    private String titulo;
    private String tituloOriginal;
    private String sinopse;
    private String elenco;
    private int classificacao;
    private List<Integer> generoIds;

    public Filme(String titulo, String tituloOriginal, String sinopse, String elenco, int classificacao, List<Integer> generoIds) {
        this.titulo = titulo;
        this.tituloOriginal = tituloOriginal;
        this.sinopse = sinopse;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.generoIds = generoIds;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getTituloOriginal() {
        return tituloOriginal;
    }

    public String getSinopse() {
        return sinopse;
    }

    public String getElenco() {
        return elenco;
    }

    public int getClassificacao() {
        return classificacao;
    }

    public List<Integer> getGeneroIds() {
        return generoIds;
    }
}