public class ListaDeFilmes
{
    private Date dataCriacao;
    private Date dataAtualizacao;
    private string nome;

    public ListaDeFilmes(Date dataCriacao, Date dataAtualizacao, string nome) {
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

    public string getNome() {
        return nome;
    }
}