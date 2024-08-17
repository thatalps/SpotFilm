package SpotFilm.util;

import SpotFilm.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Autenticador {

    private BCryptPasswordEncoder criptografo = new BCryptPasswordEncoder();

    public Autenticador(){}

    public String criptografar(String senha)
    {
        return criptografo.encode(senha);
    }

    public boolean autenticarUsuario(String email, String senha, Usuario usuario) {
        return usuario.getEmail().equals(email) && criptografo.matches(senha, usuario.getSenha());
    }

}
