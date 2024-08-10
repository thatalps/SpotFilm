package SpotFilm.repository;

import SpotFilm.model.Filme;
import SpotFilm.model.ListaDeFilmes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ListaDeFilmesRepository extends CrudRepository<ListaDeFilmes, Long> {

    @Query(value = "select id_filme " +
            "from lista, itemLista" +
            "where lista.id_lista=itemLista.id_lista " +
            "and lista.nome_lista like :nomeLista%;", nativeQuery = true)
    public Optional<Filme> buscaIdFilmesPorNomeLista(String nomeLista);

    @Query(value = "select id_filme " +
            "from lista, itemLista" +
            "where lista.id_lista=itemLista.id_lista " +
            "and lista.id_lista= :idLista;", nativeQuery = true)
    public Optional<Filme> buscaIdFilmesPorIdLista(long idLista);

}
