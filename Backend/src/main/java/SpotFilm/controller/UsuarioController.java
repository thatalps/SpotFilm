package SpotFilm.controller;

import SpotFilm.model.Usuario;
import SpotFilm.repository.UsuarioRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;
    BCryptPasswordEncoder criptografar = new BCryptPasswordEncoder();

    private static final Logger logger = LoggerFactory.getLogger(UsuarioRepository.class);

    @PostMapping("/usuarios/cadastro")
    public void cadastro(@RequestBody Usuario usuario)
    {
        String senhaCriptografada = criptografar.encode(usuario.getSenha());
        usuario.setSenha(senhaCriptografada);
        usuarioRepository.save(usuario);
    }

    @PostMapping("/usuarios/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String senha)
    {
        Usuario usuario = usuarioRepository.findByEmail(email);
        boolean autenticado = Usuario.autenticarUsuario(email, senha, usuario);

        if (autenticado) {
            return ResponseEntity.ok("Login bem-sucedido");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }

}
