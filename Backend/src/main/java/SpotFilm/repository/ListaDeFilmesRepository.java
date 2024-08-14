package SpotFilm.repository;

import SpotFilm.model.Filme;
import SpotFilm.model.ListaDeFilmes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ListaDeFilmesRepository extends CrudRepository<ListaDeFilmes, Long> {

    @Query(value = "SELECT id_filme " +
            "FROM lista, itemLista " +
            "WHERE lista.id_lista = itemLista.id_lista " +
            "AND lista.nome_lista LIKE CONCAT(:nomeLista, '%');", nativeQuery = true)
    public List<Filme> buscaIdFilmesPorNomeLista(String nomeLista);

    @Query(value = "SELECT id_filme " +
            "FROM lista, itemLista " +
            "WHERE lista.id_lista = itemLista.id_lista " +
            "AND lista.id_lista = :idLista;", nativeQuery = true)
    public List<Filme>  buscaIdFilmesPorIdLista(long idLista);
}

