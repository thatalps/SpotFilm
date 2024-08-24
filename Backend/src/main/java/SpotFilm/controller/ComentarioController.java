package SpotFilm.controller;

import SpotFilm.dto.ApiResposta;
import SpotFilm.dto.ComentarioResposta;
import SpotFilm.model.Avaliacao;
import SpotFilm.model.Comentario;
import SpotFilm.repository.AvaliacaoRepository;
import SpotFilm.repository.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/api/cometario")
public class ComentarioController {

    @Autowired
    ComentarioRepository comentarioRepository;
    AvaliacaoRepository avaliacaoRepository;

    @PostMapping("post")
    public ResponseEntity<String> addComentario(@RequestBody Comentario comentario) {
        comentarioRepository.save(comentario);
        return ResponseEntity.status(HttpStatus.CREATED).body("Comentário postado com sucesso!");
    }

    @GetMapping("get")
    public List<Comentario> getComentarios(){
        return comentarioRepository.findAll();
    }

}
