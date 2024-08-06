package SpotFilm.service;

import SpotFilm.dto.FilmeRespostaApi;
import SpotFilm.model.Filme;
import SpotFilm.model.Genero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class ApiService {

    private final String key = "133200f2eff0ca714a6a577183579cf7";
    @Autowired
    private RestTemplate restTemplate;

    private static final Logger logger = LoggerFactory.getLogger(ApiService.class);

    public Filme getFilme(String url) {
        try {

            Filme apiResponse = restTemplate.getForObject(url, Filme.class);
            logger.info("Successfully retrieved data from TMDb");
            return apiResponse;
        } catch (Exception e) {
            logger.error("Failed to retrieve data from TMDb", e);
            return null;
        }
    }

    public FilmeRespostaApi getFilmes(String url) {
        try {

            FilmeRespostaApi apiResponse = restTemplate.getForObject(url, FilmeRespostaApi.class);
            logger.info("Successfully retrieved data from TMDb");
            return apiResponse;
        } catch (Exception e) {
            logger.error("Failed to retrieve data from TMDb", e);
            return null;
        }
    }

    public Genero getGenero(String url) {
        try {
            ResponseEntity<Genero> responseEntity = restTemplate.getForEntity(url, Genero.class);
            logger.info("Successfully retrieved data from TMDb");
            return responseEntity.getBody();
        } catch (Exception e) {
            logger.error("Failed to retrieve data from TMDb", e);
            return null;
        }
    }

    public Filme getFilmePorId(long id) {
        String url = String.format("https://api.themoviedb.org/3/movie/%d?language=pt-BR&api_key=%s", id, key);
        return getFilme(url);
    }

    public FilmeRespostaApi getFilmesPorTitulo(String titulo) {
        String url = String.format("https://api.themoviedb.org/3/search/movie?query=%s&language=pt-BR&api_key=%s", titulo, key);
        return getFilmes(url);
    }

    public FilmeRespostaApi getFilmesPorGenero(int generoId) {
        String url = String.format("https://api.themoviedb.org/3/discover/movie?&language=pt-BR&api_key=%s&with_genres=%d", key, generoId);
        return getFilmes(url);
    }

    public Genero getListaGenero(){
        String url = String.format("https://api.themoviedb.org/3/genre/movie/list?&language=pt-BR&api_key=%s", key);
        return getGenero(url);
    }
}
