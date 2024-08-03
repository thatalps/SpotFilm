package SpotFilm.controller;

import SpotFilm.model.Filme;
import SpotFilm.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private ApiService apiService;

    private static final Logger logger = LoggerFactory.getLogger(ApiController.class);

    @GetMapping("/get_filme_por_id")
    public ResponseEntity<Filme> getFilmePorId(Long id) {
        try {
            Filme data = apiService.getFilmePorId(id);
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

    @GetMapping("/get_filmes_por_titulo")
    public ResponseEntity<Filme> getFilmesPorTitulo(String titulo) {
        try {
            Filme data = apiService.getFilmesPorTitulo(titulo);
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
