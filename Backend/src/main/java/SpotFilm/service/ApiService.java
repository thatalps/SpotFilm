package SpotFilm.service;

import SpotFilm.dto.FilmeComMapa;
import SpotFilm.dto.FilmeRespostaApi;
import SpotFilm.dto.GeneroRespostaApi;
import SpotFilm.model.Filme;
import SpotFilm.model.Filmes;
import SpotFilm.model.Genero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


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

    //mudar o retorno de generos
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
        String url = String.format(urlBase+"discover/movie?&language=pt-BR&api_key=%s&with_genres=%d", key, generoId);
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

    public Map<Integer, Genero> getMapGenero(){
        List<Genero> generos = getListaGenero().getGenres();

        return generos.stream().collect(Collectors.toMap(Genero::getId, genero -> genero));
    }

    public Map<Integer, Genero> getMapGenero(List<Genero> generos){
        return generos.stream().collect(Collectors.toMap(Genero::getId, genero -> genero));
    }

    public List<FilmeComMapa> converteListaFilmes(List<Filmes> filmes, Map<Integer, Genero> generoMap) {
        return filmes.stream()
                .map(filme -> {
                    FilmeComMapa filmeComMapa = new FilmeComMapa();
                    filmeComMapa.setId(filme.getId());
                    filmeComMapa.setTitle(filme.getTitle());
                    filmeComMapa.setOverview(filme.getOverview());
                    filmeComMapa.setReleaseDate(filme.getReleaseDate());
                    filmeComMapa.setVoteAverage(filme.getVoteAverage());
                    filmeComMapa.setBackdropPath(filme.getBackdropPath());
                    filmeComMapa.setPosterPath(filme.getPosterPath());

                    // Mapeia os genero_ids para objetos Genero usando o generoMap
                    Map<Integer, Genero> generosMapeados = filme.getGenero_ids().stream()
                            .filter(generoMap::containsKey)
                            .collect(Collectors.toMap(id -> id, generoMap::get));

                    filmeComMapa.setGeneros(generosMapeados);

                    return filmeComMapa;
                })
                .collect(Collectors.toList());
    }
}
