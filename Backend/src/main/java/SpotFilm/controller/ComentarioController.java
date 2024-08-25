package SpotFilm.controller;

import SpotFilm.model.Comentario;
import SpotFilm.repository.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("comentario")
public class ComentarioController {

    @Autowired
    ComentarioRepository comentarioRepository;

    @PostMapping("/postar")
    public ResponseEntity<String> postarComentario(@RequestBody Comentario comentario) {
        comentarioRepository.save(comentario);
        return ResponseEntity.status(HttpStatus.CREATED).body("Comentário postado com sucesso!");
    }

    @GetMapping("/bucarTodos")
    public ResponseEntity<List<Comentario>> buscarTodosComentarios(){
        List<Comentario> comentarios = comentarioRepository.findAll();
        if(comentarios.isEmpty() || comentarios == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ArrayList<Comentario>());
        }
        return ResponseEntity.ok(comentarios);
    }

    @GetMapping("/buscarPorFilme/{idFilme}")
    public ResponseEntity<List<Comentario>> buscarPorFilme(@PathVariable Integer idFilme) {
        List<Comentario> comentarios = comentarioRepository.findByIdFilme(idFilme);
        if(comentarios.isEmpty() || comentarios == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ArrayList<Comentario>());
        }
        return ResponseEntity.ok(comentarios);
    }

}
