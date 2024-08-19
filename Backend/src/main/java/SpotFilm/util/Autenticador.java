package SpotFilm.util;

import SpotFilm.model.Usuario;
import SpotFilm.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Autenticador {

    private BCryptPasswordEncoder criptografo = new BCryptPasswordEncoder();
    private static final Logger logger = LoggerFactory.getLogger(UsuarioRepository.class);

    public Autenticador(){}

    public String criptografar(String senha)
    {
        return criptografo.encode(senha);
    }

    public boolean autenticarUsuario(String email, String senha, Usuario usuario) {
        return usuario.getEmail().equals(email) && criptografo.matches(senha, usuario.getSenha());
    }

}
