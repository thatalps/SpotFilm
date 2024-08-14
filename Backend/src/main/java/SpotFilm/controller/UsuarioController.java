package SpotFilm.controller;

import SpotFilm.dto.ApiResposta;
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

@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder criptografar;

    private static final Logger logger = LoggerFactory.getLogger(UsuarioRepository.class);

    @PostMapping("/usuarios/cadastro")
    public ResponseEntity<String> cadastro(@RequestBody Usuario usuario)
    {
        usuario.setSenha(criptografar.encode(usuario.getSenha()));
        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Cadastro bem-sucedido");
    }

    @PostMapping("/usuarios/login")
    public ResponseEntity<ApiResposta<Long>> login(@RequestParam String email, @RequestParam String senha)
    {
        Usuario usuario = usuarioRepository.findByEmail(email);
        boolean autenticado = Usuario.autenticarUsuario(email, senha, usuario);

        if (autenticado) {
            return ResponseEntity.ok(
                new ApiResposta<>("Usuário logado com sucesso!", usuario.getId())
            );
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                new ApiResposta<>("Credenciais erradas!", null)
            );
        }
    }

}
