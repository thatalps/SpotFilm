package SpotFilm.classe;

import java.util.Date;

public class ListaDeFilmes
{
    private Date dataCriacao;
    private Date dataAtualizacao;
    private String nome;

    public ListaDeFilmes(Date dataCriacao, Date dataAtualizacao, String nome) {
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
        this.nome = nome;
    }

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public Date getDataAtualizacao() {
        return dataAtualizacao;
    }

    public String getNome() {
        return nome;
    }
}