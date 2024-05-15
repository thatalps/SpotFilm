public class Usuario extends Admin
{
    private string nome="";
    private string senha="";
    private string email="";
    private string generoFavorito1=""; // idAPI
    private string generoFavorito2="";

    public Usuario(string nome, string senha, string email, string gen1, string gen2)
    {
        this.nome=nome;
        this.senha=senha;
        this.email=email;
        this.generoFavorito1=gen1;
        this.generoFavorito2=gen2;
    }

    public string getNome() {
        return nome;
    }

    public string getSenha() {
        return senha;
    }

    public string getEmail() {
        return email;
    }

    public string getGeneroFavorito1() {
        return generoFavorito1;
    }
    public string getGeneroFavorito2() {
        return generoFavorito2;
    }
}