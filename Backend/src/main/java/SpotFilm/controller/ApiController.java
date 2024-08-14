package SpotFilm.controller;

import SpotFilm.dto.FilmeRespostaApi;
import SpotFilm.dto.GeneroRespostaApi;
import SpotFilm.model.Filme;
import SpotFilm.model.Genero;
import SpotFilm.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private ApiService apiService;

    private static final Logger logger = LoggerFactory.getLogger(ApiController.class);

    @GetMapping("/filme/id/{id}")
    public ResponseEntity<Filme> getFilmePorId(@PathVariable long id) {
        logger.info("Teste");
        Filme filme = apiService.getFilmePorId(id);
        if (filme == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(filme);
    }

    @GetMapping("/filme/titulo/{titulo}")
    public ResponseEntity<FilmeRespostaApi> getFilmesPorTitulo(@PathVariable String titulo) {
        FilmeRespostaApi filmes = apiService.getFilmesPorTitulo(titulo);
        if (filmes == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(filmes);
    }

    @GetMapping("/filme/recomendacao/{titulo}")
    public ResponseEntity<FilmeRespostaApi> getRecomendacaoPorFilmes(@PathVariable Long idFilme) {
        FilmeRespostaApi filmes = apiService.getRecomendacaoPorFilme(idFilme);
        if (filmes == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(filmes);
    }

    @GetMapping("/filme/genero/{genero}")
    public ResponseEntity<FilmeRespostaApi> getFilmesPorGenero(@PathVariable int idGenero) {
        FilmeRespostaApi filmes = apiService.getFilmesPorGenero(idGenero);
        if (filmes == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(filmes);
    }

    @GetMapping("/get_lista_de_generos")
    public ResponseEntity<GeneroRespostaApi> getListaGenero() {
        GeneroRespostaApi generos = apiService.getListaGenero();
        if (generos == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(generos);
    }
}