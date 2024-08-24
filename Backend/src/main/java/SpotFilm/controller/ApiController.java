package SpotFilm.controller;

import SpotFilm.dto.FilmeComMapa;
import SpotFilm.dto.FilmeRespostaApi;
import SpotFilm.dto.GeneroRespostaApi;
import SpotFilm.model.Filme;
import SpotFilm.model.Genero;
import SpotFilm.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin
@RequestMapping("/api/filme")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @GetMapping("/id/{id}")
    public ResponseEntity<Filme> getFilmePorId(@PathVariable long id) {
        Filme filme = apiService.getFilmePorId(id);
        if (filme == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(filme);
    }

    @GetMapping("/titulo/{titulo}")
    public ResponseEntity<List<FilmeComMapa>> getFilmesPorTitulo(@PathVariable String titulo) {
        FilmeRespostaApi filmes = apiService.getFilmesPorTitulo(titulo);
        if (filmes == null){
            return ResponseEntity.noContent().build();
        }

        List<Genero> generos = apiService.getListaGenero().getGenres();
        Map<Integer, Genero> generoMap = apiService.getMapGenero(generos);

        // Converte a lista de Filmes para FilmeComMapa usando o método separado
        List<FilmeComMapa> filmesComMapa = apiService.converteListaFilmes(filmes.getResults(), generoMap);

        return ResponseEntity.ok(filmesComMapa);
    }

    @GetMapping("/recomendacao/{idFilme}")
    public ResponseEntity<List<FilmeComMapa>> getRecomendacaoPorFilmes(@PathVariable Long idFilme) {
        FilmeRespostaApi filmes = apiService.getRecomendacaoPorFilme(idFilme);
        if (filmes == null){
            return ResponseEntity.noContent().build();
        }

        List<Genero> generos = apiService.getListaGenero().getGenres();
        Map<Integer, Genero> generoMap = apiService.getMapGenero(generos);

        // Converte a lista de Filmes para FilmeComMapa usando o método separado
        List<FilmeComMapa> filmesComMapa = apiService.converteListaFilmes(filmes.getResults(), generoMap);

        return ResponseEntity.ok(filmesComMapa);
    }

    @GetMapping("/genero/{idGenero}")
    public ResponseEntity<List<FilmeComMapa>> getFilmesPorGenero(@PathVariable int idGenero) {
        FilmeRespostaApi filmes = apiService.getFilmesPorGenero(idGenero);
        if (filmes == null){
            return ResponseEntity.noContent().build();
        }

        List<Genero> generos = apiService.getListaGenero().getGenres();
        Map<Integer, Genero> generoMap = apiService.getMapGenero(generos);

        // Converte a lista de Filmes para FilmeComMapa usando o método separado
        List<FilmeComMapa> filmesComMapa = apiService.converteListaFilmes(filmes.getResults(), generoMap);

        return ResponseEntity.ok(filmesComMapa);
    }

    @GetMapping("/lista-de-generos")
    public ResponseEntity<GeneroRespostaApi> getListaGenero() {
        GeneroRespostaApi generos = apiService.getListaGenero();
        if (generos == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(generos);
    }
}