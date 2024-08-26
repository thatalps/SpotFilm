package SpotFilm.controller;

import SpotFilm.dto.GeneroRespostaApi;
import SpotFilm.model.Filme;
import SpotFilm.model.Genero;
import SpotFilm.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin
@RequestMapping("/api/filme")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/id/{id}")
    public ResponseEntity<Filme> getFilmePorId(@PathVariable Long id) {
        Filme filme = apiService.getFilmePorId(id);
        if (filme == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(filme);
    }

    @GetMapping("/titulo/{titulo}")
    public ResponseEntity<List<Filme>> getFilmesPorTitulo(@PathVariable String titulo) {
        List<Filme> filmes = apiService.getFilmesPorTitulo(titulo);
        if (filmes == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }


        return ResponseEntity.ok(filmes);
    }

    @GetMapping("/recomendacao/{idFilme}")
    public ResponseEntity<List<Filme>> getRecomendacaoPorFilmes(@PathVariable Long idFilme) {
        List<Filme> filmes = apiService.getRecomendacaoPorFilme(idFilme);
        if (filmes == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.ok(filmes);
    }

    @GetMapping("/genero/{idGenero}")
    public ResponseEntity<List<Filme>> getFilmesPorGenero(@PathVariable Integer idGenero) {
        List<Filme> filmes = apiService.getFilmesPorGenero(idGenero);
        if (filmes == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.ok(filmes);
    }

    @GetMapping("/recomendacao_genero/{idGenero1}/{idGenero2}")
    public ResponseEntity<List<Filme>> getRecomendacoesPorGenero(@PathVariable int idGenero1, @PathVariable int idGenero2) {
        List<Filme> filmes = apiService.geraRecomendacoes(idGenero1, idGenero2);
        if (filmes == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(filmes);
    }

    @GetMapping("/lista-de-generos")
    public ResponseEntity<GeneroRespostaApi> getListaGenero() {
        GeneroRespostaApi generos = apiService.getListaGenero();
        if (generos == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(generos);
    }
}