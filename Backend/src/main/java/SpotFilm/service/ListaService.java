package SpotFilm.service;

import SpotFilm.model.Filme;
import SpotFilm.repository.ListaDeFilmesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListaService {

    @Autowired
    ListaDeFilmesRepository listaDeFilmesRepository;

    public List<Filme>  getListaPorId(long idLista)
    {
        return listaDeFilmesRepository.buscaIdFilmesPorIdLista(idLista);
    }
    public List<Filme>  getListaPorNomeLista(String nomeLista)
    {
        return listaDeFilmesRepository.buscaIdFilmesPorNomeLista(nomeLista);
    }
}
