package SpotFilm.service;

import SpotFilm.model.Filme;
import SpotFilm.repository.ListaDeFilmesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ListaService {

    @Autowired
    ListaDeFilmesRepository listaDeFilmesRepository;

    public Optional<Filme> getListaPorId(long idLista)
    {
        Optional<Filme> filmesDaLista = listaDeFilmesRepository.buscaIdFilmesPorIdLista(idLista);
        return filmesDaLista;
    }
    public Optional<Filme> getListaPorNomeLista(String nomeLista)
    {
        Optional<Filme> filmesDaLista = listaDeFilmesRepository.buscaIdFilmesPorNomeLista(nomeLista);
        return filmesDaLista;
    }
}
