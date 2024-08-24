package SpotFilm.service;

import SpotFilm.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private BCryptPasswordEncoder criptografar;

    public boolean autenticarUsuario(String email, String senha, Usuario usuario) {
        return usuario.getEmail().equals(email) && criptografar.matches(senha, usuario.getSenha());
    }
}
