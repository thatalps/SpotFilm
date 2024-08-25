package SpotFilm.controller;

import SpotFilm.dto.ApiResposta;
import SpotFilm.dto.UsuarioInfo;
import SpotFilm.dto.UsuarioLoginRequest;
import SpotFilm.model.Genero;
import SpotFilm.model.Usuario;
import SpotFilm.repository.UsuarioRepository;
import SpotFilm.service.ApiService;
import SpotFilm.util.Autenticador;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    private Autenticador autenticador = new Autenticador();

    private static final Logger logger = LoggerFactory.getLogger(UsuarioRepository.class);
    @Autowired
    private ApiService apiService;

    @PostMapping("/cadastro")
    public ResponseEntity<String> cadastro(@RequestBody Usuario usuario)
    {
        usuario.setSenha(autenticador.criptografar(usuario.getSenha()));
        usuarioRepository.save(usuario);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Cadastro bem-sucedido");
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResposta<Long>> login(@RequestBody UsuarioLoginRequest loginRequest)
    {
        Autenticador autenticador = new Autenticador();
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();

        Usuario usuario = usuarioRepository.findByEmail(email);

        boolean autenticado = autenticador.autenticarUsuario(email, senha, usuario);

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

    @GetMapping("/{idUsuario}")
    public ResponseEntity<ApiResposta<UsuarioInfo>> getUsuario(@PathVariable Long idUsuario)
    {
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(idUsuario);

        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();

            Map<Integer, Genero> generoMap = apiService.getMapGenero();

            Genero genero1 = generoMap.get(usuario.getGeneroPreferido1());

            Genero genero2 = generoMap.get(usuario.getGeneroPreferido2());

            UsuarioInfo usuarioInfo = new UsuarioInfo(usuario.getId(), usuario.getNome(), genero1, genero2);
            return ResponseEntity.ok(new ApiResposta<>("Usuário encontrado!", usuarioInfo));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResposta<>("Usuário não encontrado!", null));
        }
    }
}
