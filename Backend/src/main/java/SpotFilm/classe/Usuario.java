package SpotFilm.classe;

import SpotFilm.interfaces.*;
public class Usuario extends Admin //implements UsuarioInterface
{
    private String nome="";
    private String senha="";
    private String email="";
    private String generoFavorito1=""; // idAPI
    private String generoFavorito2="";

    public Usuario(String nome, String senha, String email, String gen1, String gen2)
    {
        this.nome=nome;
        this.senha=senha;
        this.email=email;
        this.generoFavorito1=gen1;
        this.generoFavorito2=gen2;
    }

    public String getNome() {
        return nome;
    }

    public String getSenha() {
        return senha;
    }

    public String getEmail() {
        return email;
    }

    public String getGeneroFavorito1() {
        return generoFavorito1;
    }
    public String getGeneroFavorito2() {
        return generoFavorito2;
    }
}