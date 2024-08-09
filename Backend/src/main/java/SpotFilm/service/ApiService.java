package SpotFilm.service;

import SpotFilm.dto.FilmeRespostaApi;
import SpotFilm.dto.GeneroRespostaApi;
import SpotFilm.model.Filme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service
public class ApiService {

    String urlBase = "https://api.themoviedb.org/3/";
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

    public GeneroRespostaApi getGenero(String url) {
        try {
            GeneroRespostaApi apiResponse = restTemplate.getForObject(url, GeneroRespostaApi.class);
            logger.info("Successfully retrieved data from TMDb");
            return apiResponse;
        } catch (Exception e) {
            logger.error("Failed to retrieve data from TMDb", e);
            return null;
        }
    }

    public Filme getFilmePorId(long id) {
        String url = String.format(urlBase+"movie/%d?language=pt-BR&api_key=%s", id, key);
        return getFilme(url);
    }

    public FilmeRespostaApi getFilmesPorTitulo(String titulo) {
        String url = String.format(urlBase+"search/movie?query=%s&language=pt-BR&api_key=%s", titulo, key);
        return getFilmes(url);
    }

    //recomendações baseadas no genero favorito
    public FilmeRespostaApi getFilmesPorGenero(int generoId) {
        String url = String.format(urlBase+"discover/movie?&language=pt-BR&api_key=%s&with_genres=%d", generoId, key);
        return getFilmes(url);
    }

    //recomendações baseadas em um filme
    public FilmeRespostaApi getRecomendacaoPorFilme(long id) {
        String url = String.format(urlBase+"movie/%d/recommendations?&language=pt-BR&api_key=%s", id, key);
        return getFilmes(url);
    }

    public GeneroRespostaApi getListaGenero(){
        String url = String.format(urlBase+"genre/movie/list?&language=pt-BR&api_key=%s", key);
        return getGenero(url);
    }
}
