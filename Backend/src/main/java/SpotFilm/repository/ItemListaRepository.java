package SpotFilm.repository;

import SpotFilm.model.ListaDeFilmes;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ItemListaRepository extends CrudRepository<ListaDeFilmes, Long> {
    @Modifying
    @Transactional
    @Query(value = "insert into itemLista values(:idLista, :idFilme);", nativeQuery = true)
    public void insereItemLista(@Param("idLista") Integer idLista, @Param("idFilme") int idFilme);

    @Query(value = "select id_filme from itemLista where id_lista=:idLista ;", nativeQuery = true)
    public List<Integer> buscaFilmesPorIdLista(@Param("idLista") int idLista);

}
