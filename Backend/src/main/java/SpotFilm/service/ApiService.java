package SpotFilm.service;

import SpotFilm.model.Filme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class ApiService {

    private final String key = "133200f2eff0ca714a6a577183579cf7";
    @Autowired
    private RestTemplate restTemplate;

    private static final Logger logger = LoggerFactory.getLogger(ApiService.class);

    public Filme getFilmePorId(long id) {
        String url = String.format("https://api.themoviedb.org/3/movie/%d?language=pt-BR&api_key=%s", id, key);
        try {
            ResponseEntity<Filme> responseEntity = restTemplate.getForEntity(url, Filme.class);
            logger.info("Successfully retrieved data from TMDb");
            return responseEntity.getBody();
        } catch (Exception e) {
            logger.error("Failed to retrieve data from TMDb", e);
            return null;
        }
    }

    public Filme getFilmes(String url, String titulo){
        try {
            ResponseEntity<Filme> responseEntity = restTemplate.getForEntity(url, Filme.class);
            logger.info("Successfully retrieved data from TMDb");
            return responseEntity.getBody();
        } catch (Exception e){
            logger.error("Failed to retrieve data from TMDb", e);
            return null;
        }
    }

    public Filme getFilmesPorTitulo(String titulo){
        String url = string.format("https://api.themoviedb.org/3/search/movie?query=%s&language=pt-BR&api_key=%s", titulo, key);
        Filme filme = getFilmes(url, titulo);
        return filme;
    }
}
