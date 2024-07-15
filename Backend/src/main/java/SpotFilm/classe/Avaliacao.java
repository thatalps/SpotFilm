package SpotFilm.classe;

import java.util.Date;

public class Avaliacao
{
    private Date dataCriacao;
    private int quantidadeEstrelas;

    public Avaliacao(Date dataCriacao, int quantidadeEstrelas) {
        this.dataCriacao = dataCriacao;
        this.quantidadeEstrelas = quantidadeEstrelas;
    }

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public int getQuantidadeEstrelas() {
        return quantidadeEstrelas;
    }
}