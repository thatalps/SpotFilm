package SpotFilm.controller;

import SpotFilm.dto.ComentarioResposta;
import SpotFilm.model.Comentario;
import SpotFilm.model.Usuario;
import SpotFilm.repository.ComentarioRepository;
import SpotFilm.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/comentario")
public class ComentarioController {

    @Autowired
    ComentarioRepository comentarioRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/postar")
    public ResponseEntity<String> postarComentario(@RequestBody Comentario comentario) {
        comentarioRepository.save(comentario);
        return ResponseEntity.status(HttpStatus.CREATED).body("Comentário postado com sucesso!");
    }

    @GetMapping("/bucarTodos")
    public ResponseEntity<List<ComentarioResposta>> buscarTodosComentarios(){
        List<ComentarioResposta> comentariosComNome = new ArrayList<>();
        List<Comentario> comentarios = comentarioRepository.findAll();
        comentarios.forEach(comentario -> {
            Usuario usuario = usuarioRepository.findById(comentario.idUsuario);
            comentariosComNome.add(new ComentarioResposta(
                    comentario.id,
                    comentario.dataCriacao,
                    comentario.conteudo,
                    comentario.idFilme,
                    comentario.idUsuario,
                    usuario.getNome()
            ));
        });
        if(comentariosComNome.isEmpty() || comentariosComNome == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ArrayList<ComentarioResposta>());
        }
        return ResponseEntity.ok(comentariosComNome);
    }

    @GetMapping("/buscarPorFilme/{idFilme}")
    public ResponseEntity<List<ComentarioResposta>> buscarPorFilme(@PathVariable Integer idFilme) {
        List<Comentario> comentarios = comentarioRepository.findByIdFilme(idFilme);
        List<ComentarioResposta> comentariosComNome = new ArrayList<>();
        comentarios.forEach(comentario -> {
            Usuario usuario = usuarioRepository.findById(comentario.idUsuario);
            comentariosComNome.add(new ComentarioResposta(
                    comentario.id,
                    comentario.dataCriacao,
                    comentario.conteudo,
                    comentario.idFilme,
                    comentario.idUsuario,
                    usuario.getNome()
            ));
        });
        if(comentariosComNome.isEmpty() || comentariosComNome == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ArrayList<ComentarioResposta>());
        }
        return ResponseEntity.ok(comentariosComNome);
    }

}
