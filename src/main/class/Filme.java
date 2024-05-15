public class Filme
{
    private string titulo;
    private string tituloOriginal;
    private string sinopse;
    private string elenco;
    private int classificacao;
    private List<int> generoIds;

    public Filme(string titulo, string tituloOriginal, string sinopse, string elenco, int classificacao, List<int> generoIds) {
        this.titulo = titulo;
        this.tituloOriginal = tituloOriginal;
        this.sinopse = sinopse;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.generoIds = generoIds;
    }

    public string getTitulo() {
        return titulo;
    }

    public string getTituloOriginal() {
        return tituloOriginal;
    }

    public string getSinopse() {
        return sinopse;
    }

    public string getElenco() {
        return elenco;
    }

    public int getClassificacao() {
        return classificacao;
    }

    public List<int> getGeneroIds() {
        return generoIds;
    }
}