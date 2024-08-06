package SpotFilm.controller;

import SpotFilm.dto.FilmeRespostaApi;
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
        Filme filme = apiService.getFilmePorId(id);
        if (filme == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(filme);
    }

    @GetMapping("/filme/titulo/{titulo}")
    public ResponseEntity<FilmeRespostaApi> getFilmesPorTitulo(@PathVariable String titulo) {
        try {
            FilmeRespostaApi data = apiService.getFilmesPorTitulo(titulo);
            if (data == null) {
                logger.warn("Received empty or null data from ApiService");
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(data);
        } catch (Exception e) {
            logger.error("Error occurred while fetching data", e);
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/filme/genero/{genero}")
    public ResponseEntity<FilmeRespostaApi> getFilmesPorGenero(@PathVariable int genero) {
        try {
            FilmeRespostaApi data = apiService.getFilmesPorGenero(genero);
            if (data == null) {
                logger.warn("Received empty or null data from ApiService");
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(data);
        } catch (Exception e) {
            logger.error("Error occurred while fetching data", e);
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/get_lista_de_generos")
    public ResponseEntity<Genero> getListaGenero() {
        try {
            Genero data = apiService.getListaGenero();
            if (data == null) {
                logger.warn("Received empty or null data from ApiService");
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(data);
        } catch (Exception e) {
            logger.error("Error occurred while fetching data", e);
            return ResponseEntity.noContent().build();
        }
    }
}