package SpotFilm.service;

import SpotFilm.dto.FilmesRespostaApi;
import SpotFilm.dto.GeneroRespostaApi;
import SpotFilm.model.Filme;
import SpotFilm.model.Genero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;
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
    public List<Filme> getFilmes(String url) {
        try {
            FilmesRespostaApi apiResponse = restTemplate.getForObject(url, FilmesRespostaApi.class);
            List<Filme> filmesComGenero = new ArrayList<>();
            logger.info("Successfully retrieved data from TMDb");
            Map<Integer, String> generoMap = converteGenerosParaMapa();
            apiResponse.getResults().forEach(filme -> {
                List<Genero> generos = filme.getGeneroIds().stream()
                        .map(id -> new Genero(id, generoMap.get(id)))
                        .collect(Collectors.toList());
                filmesComGenero.add(new Filme(filme.getBackdropPath(),
                                     generos,
                                     filme.getId(),
                                     filme.getOverview(),
                                     filme.getPosterPath(),
                                     filme.getReleaseDate(),
                                     filme.getTitle(),
                                     filme.getVoteAverage()));
            });
            return filmesComGenero;
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

    public List<Filme> getFilmesPorTitulo(String titulo) {
        String url = String.format(urlBase+"search/movie?query=%s&language=pt-BR&api_key=%s", titulo, key);
        return getFilmes(url);
    }

    //recomendações baseadas no genero favorito
    public List<Filme> getFilmesPorGenero(Integer generoId) {
        String url = String.format(urlBase+"discover/movie?&language=pt-BR&api_key=%s&with_genres=%d", key, generoId);
        return getFilmes(url);
    }

    //recomendações baseadas em um filme
    public List<Filme> getRecomendacaoPorFilme(long id) {
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

    public Map<Integer, String> converteGenerosParaMapa() {
        GeneroRespostaApi generosResposta = getListaGenero();
        return generosResposta.getGenres().stream()
                .collect(Collectors.toMap(Genero::getId, Genero::getName));
    }

    public List<Filme> geraRecomendacoes(Integer genero1, Integer genero2){
        List<Filme> filme = getFilmesPorGenero(genero1);
        List<Filme> filme2 = getFilmesPorGenero(genero2);
        List<Filme> filmesFiltrados = new ArrayList<>();

        int id_filme = 0;
        int escolhaGenero = 0;

        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            escolhaGenero = random.nextInt(1,2);
            id_filme = random.nextInt(0, filme.size());

            if (escolhaGenero == 1){
                filmesFiltrados.add(filme.get(id_filme));
                filme.remove(id_filme);
            } else {
                filmesFiltrados.add(filme2.get(id_filme));
                filme2.remove(id_filme);
            }
        }

        return filmesFiltrados;
    }
}
